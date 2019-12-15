const express = require('express');
const productController = require('../controllers/controller.product')

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

var controller = require('../controllers/controller.product');

const router = express.Router();

router.get('/', productController.getProduct);

router.get('/post', productController.getPostProduct);

router.post('/post', urlencodedParser, controller.postProduct);

router.get('/edit/:id', controller.getEditProduct);

router.post('/edit', urlencodedParser, controller.postEditProduct);

router.get('/delete/:id', controller.deleteProduct);

module.exports = router;