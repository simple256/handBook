import * as argon2 from 'argon2';
import * as jwt from 'jsonwebtoken';
import { model } from 'mongoose';

require('../models/user');
require('dotenv/config');
const User = model('User');

/**
 * Авторизация пользователя
 * @param req
 * @param res
 */
const signIn = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email })
        .exec()
        .then(async (user) => {
            if (!user) {
                res.status(401).json({
                    message: 'Пользователя не существует.',
                });
            }
            const isValid = await argon2.verify(user.get('password_hash'), password);
            if (isValid) {
                const token = jwt.sign(
                    {
                        _id: user.get('_id'),
                        name: user.get('name'),
                        email: user.get('email'),
                    },
                    process.env.JWT_SECRET,
                    { expiresIn: '12h' },
                );
                res.json({ token });
            } else {
                res.status(401).json({
                    message: 'Неверные данные для авторизации.',
                });
            }
        })
        .catch((err) =>
            res.status(500).json({
                Error: err.message,
            }),
        );
};

/**
 * Регистрация пользователя
 * @param req
 * @param res
 */
const register = (req, res) => {
    const { email, password } = req.body;
    if (!email || email.length < 5 || email.length > 40) {
        res.json({
            message: 'Введите корректный логин. ' + 'Длина логина должна быть не менее 5 и не более 40 символов.',
            fields: ['email'],
        });
    } else if (!password || password.length < 10 || password.length > 40) {
        res.json({
            message: 'Введите корректный пароль. ' + 'Длина пароля не менее 10 и не более 40 символов.',
            fields: ['password'],
        });
    } else {
        User.findOne({ email })
            .exec()
            .then(async (user) => {
                if (user) {
                    res.status(500).json({
                        message: 'Пользователь уже зарегистрирован.',
                    });
                } else {
                    User.create({
                        email,
                        password_hash: await argon2.hash(password),
                    }).then(
                        () => res.status(200).send('OK'),
                        (err) => res.status(500).json(err),
                    );
                }
            });
    }
};

export default { signIn, register };
