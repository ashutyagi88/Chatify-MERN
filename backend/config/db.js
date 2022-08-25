const mongoose = require("mongoose");
const express = require("express");

const connectDB = async () => {
  const app = express();
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MONGO DB Connected ${conn.connection.host}`);
    app.get("/", (req, res, next) => {
      res.send("Data Connected");
    });
  } catch (error) {
    console.log(`Error:${error.message}`);
    process.exit();
  }
};
module.exports = connectDB;
