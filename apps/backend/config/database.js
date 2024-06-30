const mongoose = require('mongoose');
const { seedAdmin } = require('../controllers/adminController')
const dotenv = require('dotenv');

dotenv.config({ path: '.env' })

mongoose
    .connect(process.env.DATABASE_URL)
    .then(async () => {
        console.log('Mongodb connected successfully');
        await seedAdmin()
    })
    .catch((err) => {
        console.error('Failed to connect:', err);
    });

require('../models/faqsModel');
