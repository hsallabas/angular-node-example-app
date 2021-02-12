const httpStatus = require('http-status');
const tokenService = require('./token.service');
const userService = require('./user.service');
const ApiError = require('../utils/ApiError');
const { tokenTypes } = require('../config/tokens');
const bcrypt = require('bcryptjs');

/**
 * Login with loginName and password
 * @param {string} loginName
 * @param {string} password
 * @returns {Promise<User>}
 */
const loginUserWithLoginNameAndPassword = async (loginName, password) => {
  const user = await userService.getUserByLoginName(loginName);
  if (!user || !bcrypt.compare(password, user.password)) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect user name or password');
  }
  return user;
};

module.exports = {
  loginUserWithLoginNameAndPassword,
};
