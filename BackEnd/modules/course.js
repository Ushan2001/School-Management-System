const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({

    cid:{
        type: String,
        required: true
    },

    name:{
        type: String,
        required: true
    },

    credit:{
        type: String,
        required: true
    },

    date:{
        type: String,
        required: true
    },

    note:{
        type: String,
        required: true
    }

    


});

module.exports = mongoose.model("Course", CourseSchema)