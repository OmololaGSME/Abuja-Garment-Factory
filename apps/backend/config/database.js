const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config({ path: '.env' })

mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('Mongodb connected successfully');
    })
    .catch((err) => {
        console.error('Failed to connect:', err);
    });

require('../models/faqsModel');
