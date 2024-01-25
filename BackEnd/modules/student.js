const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },

    age:{
        type: Number,
        required: true
    },

    address:{
        type: String,
        required: true
    },

    gender:{
        type: String,
        required: true
    },

    number:{
        type: String,
        required: true
    },


});

module.exports = mongoose.model("Student", StudentSchema)