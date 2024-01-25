const mongoose = require("mongoose");

const FeeSchema = new mongoose.Schema({

    topic:{
        type: String,
        required: true
    },

    reference:{
        type: String,
        required: true
    },

    type:{
        type: String,
        required: true
    },

    amount:{
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

module.exports = mongoose.model("Payment", FeeSchema)