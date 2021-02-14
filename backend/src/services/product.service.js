const Product = require('../models/product.model');

/**
 * Get products
 */
const getAllProducts = async () => {
  return Product.findAll();
};

module.exports = {
    getAllProducts,
};
