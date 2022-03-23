// Import packages and assign them to variables
const express= require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const app=express();

// declare a variable to PORT
// when running on local computer, server port is 8080
// else assign an availale port
const PORT = process.env.PORT||8080;

app.use(cors());
app.use(bodyParser.json);