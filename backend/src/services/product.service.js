const Product = require('../models/product.model');
const { Op } = require('sequelize');

/**
 * Get products
 */
const getProducts = async (req) => {
  return Product.findAll({
    where: {
      [Op.and]: [
        req.query && req.query.name ? { 
          name: {
            [Op.like]: `%${req.query.name}%`
          }
        } : '',
        req.query && req.query.type ? { 
          type: {
            [Op.eq]: `${req.query.type}`
          }
        } : '' 
      ]
    }
  });
};

module.exports = {
    getProducts,
};
