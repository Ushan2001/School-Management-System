const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({

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

    subject:{
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
    }


});

module.exports = mongoose.model("Teacher", TeacherSchema)