const Sequelize = require("sequelize");
const db = new Sequelize(
  "matiastmbd",
  "matiastmbd_user",
  "I0Z5ULcM0U0GokVqhJxh5w9yBTo9w4x6",
  {
    host: "dpg-cg0dbom4dad93e1tjqsg-a",
    dialect: "postgres",
    logging: false,
  }
);

module.exports = db;
