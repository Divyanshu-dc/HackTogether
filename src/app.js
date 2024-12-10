const express = require("express");
const connectDB = require("./config/database");
const app = express();

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(4444, () => {
      console.log("Server is running.......");
    });
  })
  .catch((err) => {
    console.log("DB not connected");
  });
