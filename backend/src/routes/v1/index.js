const express = require('express');
const authRoute = require('./auth.route');
const productRoute = require('./product.route');
const basketRoute = require('./basket.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/products',
    route: productRoute,
  },
  {
    path: '/cart',
    route: basketRoute,
  },
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
