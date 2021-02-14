const express = require('express');
const auth = require('../../middlewares/auth');
const productController = require('../../controllers/product.controller');

const router = express.Router();

router.route('/').get(auth(), productController.getProducts);

module.exports = router;