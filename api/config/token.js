const jwt = require("jsonwebtoken");

const SECRET = "TEST";

const generateToken = (payload) =>
  jwt.sign(payload, SECRET, { expiresIn: "2h" });

const validateToken = (token) => jwt.verify(token, SECRET);

module.exports = { generateToken, validateToken };
