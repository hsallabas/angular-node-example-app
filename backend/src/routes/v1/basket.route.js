const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const basket = require('../../controllers/basket.controller');
const basketValidation = require('../../validations/basket.validation');

const router = express.Router();

router.route('/').post(auth(), validate(basketValidation.getBasket), basket.getBaskets);

module.exports = router;