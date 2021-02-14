const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { productService } = require('../services');

const getProducts = catchAsync(async (req, res) => {
  const products = await productService.getProducts(req);
  res.send({ 
    data: products,
    message: 'Get all products success',
    statusCode: httpStatus.OK,
  });
});

const getBaskets = catchAsync(async (req, res) => {
  const baskets = await productService.getBaskets(req);
  res.send({ 
    data: baskets,
    message: 'Get basket',
    statusCode: httpStatus.OK,
  });
});

module.exports = {
  getProducts,
  getBaskets
};