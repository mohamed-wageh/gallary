const mongoose = require('mongoose');

mongoose.connect(process.env.mongoDB_url);

const connection = mongoose.connection;

connection.on("connected", ()=>{
  console.log("mongo DB Connection Successful");
})

connection.on("error", ()=>{
  console.log("mongo DB Connection Failed");
})

module.exports = connection;
