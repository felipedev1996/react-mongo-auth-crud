import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/react-mongo-auth-crud");
    console.log('DB connected');

  } catch (error) {
    console.log(error);
  }
};
