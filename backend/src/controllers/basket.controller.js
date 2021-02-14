const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { basketService } = require('../services');

const getBaskets = catchAsync(async (req, res) => {
  const baskets = await basketService.getBaskets(req);
  res.send({ 
    data: baskets,
    message: 'Get basket',
    statusCode: httpStatus.OK,
  });
});

const addItem = catchAsync(async (req, res) => {
  const result = await basketService.addItem(req.body);
  res.send({ 
    data: result,
    message: 'Add item',
    statusCode: httpStatus.OK,
  });
});

module.exports = {
  getBaskets,
  addItem
};