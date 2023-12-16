const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv"); // Change this line
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app middleware
app.use(bodyParser.json());

// dotenv configuration
dotenv.config(); // Change this line

// import routes
const userRoutes = require("./routes/userRoutes");

// routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT;
const DB_URL = process.env.MONGODB_URI;

mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }) // Update this line
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.error("DB connection error", err); // Fix this line
  });

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`); // Fix this line
});
