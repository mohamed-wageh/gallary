const express = require('express');
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const port = process.env.PORT || 8000

app.listen(port,() => console.log(`nodejs server started on port ${port}`))