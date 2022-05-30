const mongoose = require("mongoose");

const newadds = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    emage: {
        type: String,
        required: true,
        
    },
  
    category: {
        type: String,
        required: true
    },
   
    price: {
        type: Number,
        required: true
    },
    addStatus: {
        type: String,
        required: true
    }
});

const addsData = new mongoose.model("adds",newadds);


module.exports = addsData;