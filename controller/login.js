//const User = require('./userInfomodel'); // Import userInfomodel

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user = require('../model/loginshema');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // If passwords match, generate JWT token
        const token = jwt.sign({ userId: email }, "secret", { expiresIn: "2d" });

        // Return success message along with token and user email
        return res.status(200).json({ message: 'Login successful', token, email });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { login };

