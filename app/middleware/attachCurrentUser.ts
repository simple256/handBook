import { model } from 'mongoose';
require('../models/user');

const UserModel = model('User');

export default async (req, res, next) => {
    const decodedTokenData = req.token;
    const userRecord = await UserModel.findOne({ _id: decodedTokenData._id });

    req.currentUser = userRecord;

    if (!userRecord) {
        return res.status(401).end('Пользователь не найден.');
    } else {
        return next();
    }
};
