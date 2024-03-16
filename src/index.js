import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});
import connectDB from "./db/index.js";
import { app } from "./app.js";
const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`App is listening at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed!", error);
  });
