require("dotenv").config();
const express = require("express");
const app = express();


const mongoose = require("mongoose");
const router = require("./routes/route");
require("./db/conn");
const DefaultData = require("./defaultdata");
const port = process.env.PORT || 8003;

app.use(router);
app.listen(port, () => {
    console.log(`server is start port number ${port}`);
});

DefaultData();