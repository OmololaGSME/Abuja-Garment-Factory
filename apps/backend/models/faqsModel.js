const mongoose = require('mongoose');

const FaqsSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
});

const FaqsModel = mongoose.model('Faqs', FaqsSchema);

module.exports = FaqsModel;
