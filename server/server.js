// Import packages and assign them to variables
const express= require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app=express();

// declare a variable to PORT
// when running on local computer, server port is 8080
// else assign an availale port
const PORT = process.env.PORT||8080;

// Use declared dependencies
app.use(cors());
app.use(bodyParser.json());

// get url from .env file
const URL=process.env.MONGODB_URL;

// connect to mongodb database
mongoose.connect(URL,{
    //useCreateIndex:true,
    useNewUrlParser:true,
    //useUnifiedTopologyL:true,
    //useFindAndModify:false
});

// Created a connection and open
const connection=mongoose.connection;
connection.once("open",()=>{ console.log("Mongodb Connection Success!")});

// once database is connected add listen connection to the port
app.listen(PORT,()=>{console.log(`Server is up and running on port ${PORT}`)});