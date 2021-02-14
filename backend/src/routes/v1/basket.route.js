const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const basket = require('../../controllers/basket.controller');
const basketValidation = require('../../validations/basket.validation');

const router = express.Router();

router.route('/').post(auth(), validate(basketValidation.getBasket), basket.getBaskets);
router.route('/addItem').post(auth(), validate(basketValidation.addItem), basket.addItem);

module.exports = router;