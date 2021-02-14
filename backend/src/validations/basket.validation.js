const Joi = require('joi');

const getBasket = {
  body: Joi.object().keys({
    userID: Joi.number().required(),
  }),
};

const addItem = {
  body: Joi.object().keys({
    userID: Joi.number().required(),
    productID: Joi.number().required(),
    quantity: Joi.number().required(),
  }),
};

module.exports = {
    getBasket,
    addItem,
};
