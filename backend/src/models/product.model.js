
const { DataTypes } = require('sequelize');
const config = require('../config/config');

const Product = config.sequelize.define('Product', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(32),
    allowNull: false
  },
  type: {
    type: DataTypes.STRING(8),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  // Other model options go here
  tableName: 'products',
  timestamps: false
});

module.exports = Product;
