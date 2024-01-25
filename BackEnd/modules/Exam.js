const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },

    grade:{
        type: String,
        required: true
    },

    venue:{
        type: String,
        required: true
    },

    date:{
        type: String,
        required: true
    },

    subject:{
        type: String,
        required: true
    },

    tid:{
        type: String,
        required: true
    }

    


});

module.exports = mongoose.model("Exam", ExamSchema)