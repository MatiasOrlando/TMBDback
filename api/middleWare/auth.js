const { validateToken } = require("../config/token");

function validateUser(req, res, next) {
  const { token } = req.cookies;
  const payload = validateToken(token);
  req.user = payload;
  payload ? next() : res.status(401).send(`Invalid User`);
}

module.exports = validateUser;
