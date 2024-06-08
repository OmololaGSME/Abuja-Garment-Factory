const mongoose = require('mongoose');

const PopUpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String
    },
    message: {
        type: String
    }
})

const PopUpModel = mongoose.model('PopUp', PopUpSchema);

module.exports = PopUpModel