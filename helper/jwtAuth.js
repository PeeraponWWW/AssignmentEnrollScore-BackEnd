import jwt from 'jsonwebtoken';

export const createToken = (data) => {
    return jwt.sign(data, process.env.JWT_SECRET_KEY, {expiresIn: process.env.JWT_EXPIRATION});
}

export const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
}