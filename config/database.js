const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database is Connected Successfully"))
    .catch((err) => {
      console.error("Database is not Connected.", err.message);
      process.exit(1);
    });
};

module.exports = dbConnect; // Use CommonJS `module.exports`
