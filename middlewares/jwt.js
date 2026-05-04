const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res, next) => {
    try {
        const authHeader = req.header("Authorization");
        if (!authHeader) {
            return res.send("Access Denied");
        };

        const token = authHeader.split(" ")[1];

        if (!token) {
            return res.send("Token Expired");
        };

        const user = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } catch (error) {
        return res.send("token is not valid");
    }
};