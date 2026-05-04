const jwt = require("jsonwebtoken");
require('dotenv').config();
const users = [
    {
        userId: 1,
        userName: "Keval",
        password: "1234aa"
    },
    {
        userId: 2,
        userName: "luffy",
        password: "1234bb"
    },
];

exports.login = async (req, res) => {
    try {
        const { userId, password } = req.body;
        const findUser = await users.find((u) => u.userName === userId && u.password === password);
        if (!findUser) {
            return res.send("No User Found");
        }
        const token = await jwt.sign(
            { userId: findUser.userId, userName: findUser.userName },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )
        return res.send(token);
    } catch (error) {
        console.log(error)
    }
}; 