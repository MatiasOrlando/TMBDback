require("dotenv").config();
const Sequelize = require("sequelize");
const db = new Sequelize(db_tmbd, process.env.USER_NAME, process.env.PASSWORD, {
  host: process.env.HOST_NAME,
  dialect: "postgres",
  logging: false,
});

module.exports = db;
