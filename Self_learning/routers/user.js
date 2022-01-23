const express = require('express');
const User = require('../models/user');
const router = new express.Router();

router.post('/user', async(req, res) => {
    try {
        const user = await User(req.body);
        user.save();
        res.send(user);
    } catch (e) {
        res.status(402).send()
    }
})

router.get('/users', async(req, res) => {
    try {
        const users = await User.find({});
        console.log(users)
        res.status(200).send(users);
    } catch (e) {
        res.status(500).send();
    }
})

router.get ('/user/login', async(req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        res.status(200).send(user);
    } catch (e) {
        res.status(400).send();
    }
})

module.exports = router;