const express =  require('express');
const route = express.Router();
const verifyToken = require('../middleware/authMiddleware');

// Import Controllers
const faqsController = require('../controllers/faqsController')
const popUpController = require('../controllers/popUpController')
const adminController = require('../controllers/adminController');

// Auth Routes
route.post('/auth/login', adminController.login);
route.post('/refresh-token', adminController.refreshToken);
route.post('/auth/logout', verifyToken, adminController.logout);

route.get('/protected', verifyToken, (req, res) => {
    res.send('Protected route')
});

// Faqs Routes
route.post('/create-faq',faqsController.create);
route.get('/get-faqs', faqsController.getAll);
route.put('/update-faqs/:id', faqsController.update);
route.delete('/delete-faqs/:id', faqsController.delete);

// Popup Routes
route.post('/create-popup', popUpController.create);
route.post('/send-mail', popUpController.sendMailToUser);

module.exports = route