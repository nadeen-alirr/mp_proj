const express = require("express");
const cors=require("cors");
const app = express();
require('dotenv').config();
const port=process.env.PORT  || 3010 ;
const mongoose = require("mongoose");
const DB= process.env.MDB;


mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });


  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});