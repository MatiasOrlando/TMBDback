require("dotenv").config();
const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.DB,
  process.env.USER_NAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST_NAME,
    dialect: "postgres",
    logging: false,
  }
);

module.exports = db;
