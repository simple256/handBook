import * as jwt from 'jsonwebtoken';
import jwtSecret from '../../config/app';

export = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    res.status(401).json({
      message: 'Token not provided!',
    });
  }
  const token = authHeader.replace('Bearer ', '');
  try {
    jwt.verify(token, jwtSecret);
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      req.status(401).json({
        message: 'Invalid token',
      });
    }
  }

  next();
};
