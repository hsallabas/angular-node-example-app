
const { DataTypes } = require('sequelize');
const config = require('../config/config');
const Product = require('./product.model');
const User = require('./user.model');


const Basket = config.sequelize.define('Basket', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    autoIncrement: true
  },
  productID: {
    type: DataTypes.NUMBER,
    foreignKey: true,
    allowNull: false
  },
  userID: {
    type: DataTypes.NUMBER,
    foreignKey: true,
    allowNull: false
  },
  quantity: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
}, {
  // Other model options go here
  tableName: 'baskets',
  timestamps: false
});

User.belongsToMany(Product, { through: Basket, foreignKey: 'userID' });
Product.belongsToMany(User, { through: Basket, foreignKey: 'productID' });

module.exports = Basket;