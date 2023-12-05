const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI).then(()=>{

    app.listen(PORT,()=>{
        console.log(`Server is running at port ${PORT} and DB connected`)
    })
})
