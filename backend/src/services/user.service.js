const User = require('../models/user.model');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  const user = await User.create(userBody);
  return user;
};

/**
 * Get user by loginName
 * @param {string} loginName
 * @returns {Promise<User>}
 */
const getUserByLoginName = async (loginName) => {
  return User.findOne({ where: { loginName } });
};

module.exports = {
  createUser,
  getUserByLoginName,
};
