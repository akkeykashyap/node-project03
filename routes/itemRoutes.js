const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Route to get all items
router.get('/',itemController.getAllItem);

// Route to add a new item
router.post('/add',itemController.addItem);

module.exports = router;


