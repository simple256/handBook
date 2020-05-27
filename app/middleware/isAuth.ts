import * as jwt from 'express-jwt';
require('dotenv/config');

const getTokenFromHeader = (req) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
};

export default jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'token', // this is where the next middleware can find the encoded data generated in services/auth:generateToken
    getToken: getTokenFromHeader,
});
