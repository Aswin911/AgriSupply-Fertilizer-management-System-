const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const { Users } = require("../models");
const JWT_SECRET = 'secret'

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            console.log('Username and password are required');
            return res.status(400).json({ message: "Username and password are required" });
        }

        try {
            const user = await Users.findOne({ where: { username: username }, rejectOnEmpty: true })

            const isMatch = await bcrypt.compare(password, user.password);

            if (isMatch) {
                const token = jwt.sign(
                    { user_id: user.id, username: user.username, role: user.role },
                    JWT_SECRET,
                    { expiresIn: '7d' }
                );

                const decoded = jwt.verify(token, JWT_SECRET)

                return res.json({ token: token, user_id: user.id, username: user.username, role: user.role, exp: decoded.exp });
            } else {
                return res.status(400).json({ message: "Invalid Credentials" });
            }

        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Username not found" });
        }

    } catch (error) {
        res.status(500).json({ error: "Unable to login", message: error.message });
    }
})

router.post('/register', async (req, res) => {
    try {
        const { username, password, role, security_question, answer } = req.body

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const response = await Users.create({ username, password: hashedPassword, role, security_question, answer })
        res.status(200).json({ msg: "User Created",insertID: response.id })
    } catch (error) {
        res.status(500).json({ error: "Unable to create user", message: error.message })
    }
})

router.post('/forgot_password', async (req, res) => {
    try {
        const { username, security_question, answer, password } = req.body;

        if (!username || !security_question || !answer) {
            console.log('Username and question are required');
            return res.status(400).json({ message: "Username and question are required" });
        }

        try {
            const user = await Users.findOne({ where: { username: username }, rejectOnEmpty: true })

            const isMatch = user.security_question === security_question && user.answer === answer

            if (isMatch) {
                const salt = await bcrypt.genSalt(10)
                const hashedPassword = await bcrypt.hash(password, salt)

                await user.update({password: hashedPassword})

                return res.json({ msg: "Password changed successfully" });
            } else {
                return res.status(400).json({ message: "Invalid Credentials" });
            }

        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Username not found" });
        }

    } catch (error) {
        res.status(500).json({ error: "Unable to login", message: error.message });
    }
})

module.exports = router;