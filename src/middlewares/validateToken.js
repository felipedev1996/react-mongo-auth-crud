import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../../config.js";

export const authRequired = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(401).json({ message: "Unauthorized, please login" });

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Unauthorized" });

    req.user = user;

    console.log(user);

    next();
  });
};
