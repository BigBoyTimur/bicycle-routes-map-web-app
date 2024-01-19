const {UserModel} = require('../models/user');
const {hashPassword, comparePassword} = require('../helpers/auth');
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json('test is working');
}

const registerUser = async (req, res) => {
    try {
        const {login, password} = req.body;

        if (!login) return res.json({
            error: "логин обязателен"
        })
        if (!password) return res.json({
            error: "пароль обязателен"
        })

        const exists = await UserModel.findOne({where: {userName: login}});
        if (exists) {
            return res.json({
                error: "такой пользователь уже есть"
            })
        }

        const hashedPassword = await hashPassword(password);

        const user = await UserModel.create({
            userName: login, password: hashedPassword
            });

        return res.json(user);
    } catch (error) {
        console.log(error);
    }
}

const loginUser = async (req, res) => {
    try {
        const {login, password} = req.body;

        if (!login) return res.json({
            error: "логин обязателен"
        })
        if (!password) return res.json({
            error: "пароль обязателен"
        })

        const user = await UserModel.findOne({where: {userName: login}});
        if (!user) {
            return res.json({
                error: "такого пользователя не существует"
            })
        }

        const match = await comparePassword(password, user.password);

        if (!match) {
            return res.json({
                error: "неверный пароль"
            })
        }

        if (match) {
            const token = jwt.sign({userName: login, id: user.user_id}, process.env.JWT_SECRET);
            res.cookie('token', token).json(user);
        }


    } catch (error) {
        console.log(error)
    }
}

const getProfile = (req, res) => {
    const {token} = req.cookies;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) throw err;
            res.json(user);
        })
    } else{
        res.json(null);
    }
}

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
}