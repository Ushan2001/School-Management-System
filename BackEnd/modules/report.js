const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true
    },

    date:{
        type: String,
        required: true
    },

    type:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    }

    

    


});

module.exports = mongoose.model("Report", ReportSchema)