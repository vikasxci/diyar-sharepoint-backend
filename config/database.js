import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("Database is Connected Successfully"))
    .catch((err) => {
      console.error("Database is not Connected.", err.message);
      process.exit(1);
    });
};

export default dbConnect; // Use ES Module export
