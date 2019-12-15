const express = require('express');

var controller = require('../controllers/controller.product');
    
const router = express.Router();

router.get('/', getProduct);

module.exports = router;