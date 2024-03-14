import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export default async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_CONNECTION_STRING}/${DB_NAME}`
    );
    console.log(
      `MongoDB connected and DB hosted on: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection error.", error);
    process.exit(1);
  }
};
