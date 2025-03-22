const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnect = require("./config/database"); // Import database connection
const productRoutes = require("./routes/allroutes");

dotenv.config();

// Connect to Database
dbConnect();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
