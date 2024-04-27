const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const globalErrorHandler = require("./controllers/errorController");
const router = require("./routes/userRoutrs")
//Middleware
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(bodyParser.json()); //req.body
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
//Routes:
app.use('/user' , router)
app.use(globalErrorHandler);
const port = process.env.PORT || 8000 
app.listen(port,() => console.log(`nodejs server started on port ${port}`))