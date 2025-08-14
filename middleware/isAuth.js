export const isAuth = (req, res, next ) => {
    const authToken = req.headers['authorization'];
    // console.log(authToken);
    if(authToken) {
        const token = authToken.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if(err) {
                return res.status(401).json({ status: 'error', message: 'Unauthorized' });
            }
            req.user = decoded;
        next();
    });
    } else {
        return res.status(401).json({ status: 'error', message: 'Unauthorized' });
    }
} 