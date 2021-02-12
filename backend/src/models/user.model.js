
const { DataTypes } = require('sequelize');
const config = require('../config/config');
const bcrypt = require('bcryptjs');

const User = config.sequelize.define('User', {
  // Model attributes are defined here
  userID: {
    type: DataTypes.UUID,
    primaryKey: true,
    autoIncrement: true
  },
  loginName: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(20),
    allowNull: false
  }
}, {
  // Other model options go here
  tableName: 'users',
  timestamps: false
});

User.beforeCreate(async (user, options) => {
  user.password = await bcrypt.hash(user.password, 8);
});

module.exports = User;
