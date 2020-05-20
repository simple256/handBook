import * as jwt from 'jsonwebtoken';
require('dotenv/config');

export default function checkToken(req, res, next) {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    res.status(401).json({
      message: 'Отсутвует токен!',
    });
  }
  const token = authHeader.replace('Bearer ', '');
  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      req.status(401).json({
        message: 'Неверный токен.',
      });
    }
  }

  next();
}
