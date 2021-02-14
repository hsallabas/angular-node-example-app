const Basket = require('../models/basket.model');
const Product = require('../models/product.model');
const User = require('../models/user.model');

/**
 * Get basket
 */
const getBaskets = async (req) => {
  return User.findOne({ where: { userID: 10 }, include: Product });
};

/**
 * add Item
 */
const addItem = async (reqBody) => {
  const basket = await Basket.create(reqBody);
  return basket;
};

module.exports = {
    getBaskets,
    addItem
};
