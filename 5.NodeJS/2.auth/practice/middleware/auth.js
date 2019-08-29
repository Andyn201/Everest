const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config/secrets');

module.exports = function(req, res, next) {

  // Get token from header
  const token = req.header('auth-token');

  // Check if no token
  if (!token) {
    return res.status(401).send('Need a token');
  }

  // Verify token
  try {

    const decodedToken = jwt.verify(token, jwtSecret);

    req.user = decodedToken.user;
    next();

  } catch (err) {
    res.status(401).send('Invalid Token');
  }
};