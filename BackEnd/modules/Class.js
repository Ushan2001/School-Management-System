const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },

    sid:{
        type: String,
        required: true
    },

    sname:{
        type: String,
        required: true
    },

    teacher:{
        type: String,
        required: true
    },

    note:{
        type: String,
        required: true
    }

    


});

module.exports = mongoose.model("Class", ClassSchema)