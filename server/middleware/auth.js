const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateAdmin = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).send({ error: 'Access denied. No token provided.' });
  }

  try {
    const bearerToken = token.split(' ')[1]; // Extract the token after "Bearer"
    const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET);
    req.admin = decoded; // Attach admin info to the request object
    next();
  } catch (error) {
    res.status(400).send({ error: 'Invalid token.' });
  }
};

module.exports = authenticateAdmin;
