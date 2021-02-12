const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');
const { Sequelize } = require('sequelize');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    PORT: Joi.number().default(3000),
    JWT_SECRET: Joi.string().required().description('JWT secret key'),
    JWT_ACCESS_EXPIRATION_MINUTES: Joi.number().default(30).description('minutes after which access tokens expire'),
    JWT_REFRESH_EXPIRATION_DAYS: Joi.number().default(30).description('days after which refresh tokens expire'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  console.log(error);
  throw new Error(`Config validation error: ${error.message}`);
}

const sequelize = new Sequelize(envVars.DATABASE_NAME, envVars.DATABASE_USER, envVars.DATABASE_PASSWORD, {
  host: envVars.DATABASE_HOST,
  dialect: envVars.DATABASE_DIALECT,
});

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  postgre: {
    host: envVars.DATABASE_HOST,
    dialect: envVars.DATABASE_DIALECT,
    database: envVars.DATABASE_NAME,
    user: envVars.DATABASE_USER,
    password: envVars.DATABASE_PASSWORD,
  },
  jwt: {
    secret: envVars.JWT_SECRET,
    accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
    resetPasswordExpirationMinutes: 10,
  },
  sequelize
};
