const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/app');

const Session = mongoose.model('Session');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    res.status(401).json({
      message: 'Token not provided!',
    });
  }
  const token = authHeader.replace('Bearer ', '');
  let userId;
  try {
    jwt.verify(token, jwtSecret);
    Session.findOne({ token })
      .exec()
      .then((existSession) => {
        if (existSession.expiresAt > new Date()) {
          userId = existSession.userId;
          req.userId = userId;
          next();
        } else {
          req.status(401).json({
            message: 'Token expired',
          });
        }
      }, () => req.status(401).json({
        message: 'Session not found',
      }));
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      req.status(401).json({
        message: 'Invalid token',
      });
    }
  }
};
