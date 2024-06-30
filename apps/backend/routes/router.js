const express =  require('express');
const route = express.Router();

// import controllers
const faqsController = require('../controllers/faqsController')
const popUpController = require('../controllers/popUpController')

// Faqs Routes
route.post('/create-faq', faqsController.create);
route.get('/get-faqs', faqsController.getAll);
route.put('/update-faqs/:id', faqsController.update);
route.delete('/delete-faqs/:id', faqsController.delete);

// Popup Routes
route.post('/create-popup', popUpController.create);
route.post('/send-mail', popUpController.sendMailToUser);

module.exports = route