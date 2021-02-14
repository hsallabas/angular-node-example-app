const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { productService } = require('../services');

const getAllProducts = catchAsync(async (req, res) => {
  const products = await productService.getAllProducts();
  res.send({ 
    data: products,
    message: 'Get all products success',
    statusCode: httpStatus.OK,
  });
});

module.exports = {
  getAllProducts,
};