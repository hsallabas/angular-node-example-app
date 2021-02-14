const Joi = require('joi');

const getBasket = {
  body: Joi.object().keys({
    userID: Joi.number().required(),
  }),
};

module.exports = {
    getBasket,

};
