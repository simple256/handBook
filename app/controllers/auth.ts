import * as mongoose from 'mongoose';
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/app');

require('../models/user');
const User = mongoose.model('User');

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

      const isValid = true; //bCrypt.compareSync(password, user.password);
      if (isValid) {
        const token = jwt.sign({ uid: user._id.toString() }, jwtSecret, {
          expiresIn: '24h', // expires in 24 hours
        });
        res.json({ token });
      } else {
        res.status(401).json({
          message: 'Invalid credentials.',
        });
      }
    })
    .catch((err) =>
      res.status(500).json({
        message: err.message,
      }),
    );
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
            password: '123456', //bCrypt.hashSync(password, 12),
          })
            .then(() => res.status(200).json({ message: 'Success!' }))
            .catch((err) => res.status(500).json(err));
        }
      });
  }
};

export { signIn, register };
