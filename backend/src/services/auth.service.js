const httpStatus = require('http-status');
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
  if (!user || !await bcrypt.compare(password, user.password)) {
    return {
      error: {
          message: 'Incorrect user name or password',
          statusCode: httpStatus.UNAUTHORIZED,
      }
    }
  }
  return user;
};

module.exports = {
  loginUserWithLoginNameAndPassword,
};
