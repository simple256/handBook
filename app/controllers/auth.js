const mongoose = require('mongoose');
const bCrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/app');

const User = mongoose.model('User');
const Session = mongoose.model('Session');

const generateNewToken = (uid) => {
  const createdAt = new Date();
  const expiresAt = new Date(createdAt);
  expiresAt.setDate(expiresAt.getDate() + 14);
  // eslint-disable-next-line no-underscore-dangle
  const token = jwt.sign({ uid }, jwtSecret, {
    expiresIn: '1h', // expires in 1 hour
  });
  // eslint-disable-next-line no-underscore-dangle
  const refreshToken = jwt.sign({ uid }, jwtSecret, {
    expiresIn: '336h', // expires in 2 weeks
  });
  return {
    createdAt,
    expiresAt,
    token,
    refreshToken,
  };
};

const signIn = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .exec()
    .then((user) => {
      if (!user) {
        res.status(401).json({
          message: 'User does not exist.',
        });
      }

      const isValid = bCrypt.compareSync(password, user.password);
      if (isValid) {
        // eslint-disable-next-line no-underscore-dangle
        const {
          createdAt,
          expiresAt,
          token,
          refreshToken,
          // eslint-disable-next-line no-underscore-dangle
        } = generateNewToken(user._id.toString());
        res.json({ token, refreshToken });
        Session.create({
          // eslint-disable-next-line no-underscore-dangle
          userId: user._id,
          token: token.toString(),
          refreshToken: refreshToken.toString(),
          // ip: String,
          // fingerprint: String,
          expiresAt,
          createdAt,
          // updatedAt: mongoose.Schema.Date,
        });
      } else {
        res.status(401).json({
          message: 'Invalid credentials.',
        });
      }
    })
    .catch((err) => res.status(500).json({
      message: err.message,
    }));
};

const register = (req, res) => {
  const { email, password, confirmationPassword } = req.body;
  if (!email || email.length < 5 || email.length > 40) {
    res.json({
      message: 'Введите корректный логин. Длина логина должна быть не менее 5 и не более 40 символов.',
      fields: ['email'],
    });
  } else if (!password || password.length < 10 || password.length > 40) {
    res.json({
      message: 'Введите корректный пароль. Длина пароля не менее 10 и не более 40 символов.',
      fields: ['password'],
    });
  } else if (password !== confirmationPassword) {
    res.json({
      message: 'Пароли не совпадают',
      fields: ['password', 'confirmationPassword'],
    });
  } else {
    User.findOne({ email })
      .exec()
      .then((user) => {
        if (user) {
          res.json({
            message: 'Пользователь уже зарегистрирован.',
          });
        } else {
          User.create({
            email,
            password: bCrypt.hashSync(password, 12),
          }).then(() => res.status(200).json({ message: 'Success!' }))
            .catch((err) => res.status(500).json(err));
        }
      });
  }
};

const updateSession = (req, res) => {
  const { refreshToken } = req.body;
  Session.findOneAndDelete({ refreshToken })
    .exec()
    .then((session) => {
      if (session.expiresAt > new Date()) {
        res.status(401).json({
          message: 'Token expired',
        });
      }
      const {
        tokenNew,
        refreshTokenNew,
        expiresAtNew,
        createdAtNew,
      } = generateNewToken(session.userId.toString());
      Session.create({
        // eslint-disable-next-line no-underscore-dangle
        userId: session.userId,
        token: tokenNew.toString(),
        refreshToken: refreshTokenNew.toString(),
        // ip: String,
        // fingerprint: String,
        expiresAt: expiresAtNew,
        createdAt: createdAtNew,
        // updatedAt: mongoose.Schema.Date,
      });
      res.json({ token: tokenNew, refreshToken: refreshTokenNew });
    });
};

module.exports = {
  signIn,
  register,
  updateSession,
};
