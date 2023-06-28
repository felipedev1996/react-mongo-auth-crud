import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (!userExists) {
      const passwordHash = await bcrypt.hash(password, 10);

      const newUser = new User({ email, password: passwordHash, username });

      const userSaved = await newUser.save();

      const token = await createAccessToken({ id: userSaved._id });

      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.json({
        id: userSaved._id,
        username: userSaved.username,
        email: userSaved.email,
        createAt: userSaved.createdAt,
        updateAt: userSaved.updateAt,
      });
    } else {
      res.status(400).json({ message: "User already exists" });
    }
  } catch (error) {
     res.status(500).json({ message: error.message });
    
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });

    if (!userFound) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = await createAccessToken({ id: userFound._id });
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createAt: userFound.createdAt,
      updateAt: userFound.updateAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    expires: new Date(0),
  });
  res.json({ message: "Logged out" });
};
export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  console.log(userFound);

  if (!userFound) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createAt: userFound.createdAt,
    updateAt: userFound.updateAt,
  });
};
