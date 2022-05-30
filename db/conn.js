const mongoose = require("mongoose");
require("dotenv").config();
const DB = process.env.DATABASE


mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("database connected sucessfully")).catch((error)=> console.log(error.message));