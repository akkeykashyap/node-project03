// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contractController');

// Contact page route
router.get('/contact', contactController.getContactPage);

// Contact form submission route
router.post('/contact', contactController.handleContactForm);

module.exports = router;
