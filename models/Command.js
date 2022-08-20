const mongoose = require("mongoose")

const CommandSchema = new mongoose.Schema({
    command: {
        type: String,
        required: true,
    },

    bg: {
        type: String,
        required: false,
    },

    bgimg: {
        type: String,
        required: false,
    }

 
})

module.exports = new mongoose.model("Command", CommandSchema);