const mongoose = require("mongoose");

const userData = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
  
    mobile: {
        type: Number,
        required: true
    },
   
    password: {
        type: String,
        required: true
    }
});

const users = new mongoose.model("users",userData);


module.exports = users;