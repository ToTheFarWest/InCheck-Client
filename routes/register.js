const express = require('express');
const router = express.Router();

let service = require('../service');

router.get('/', (req, res) => {
    res.render('register', {
        title: "Sign Up"
    });
});

router.post('/', async (req, res) => {
    console.log(req.body);
    path = '/users';
    params = req.body;

    try {
        result = await service.post(path, params);
        res.cookie('token', result.data.token);
        res.redirect('/');
    }
    catch (err) {
        console.log("ERROR: ", err);
        res.send("ERROR");
    }
});

module.exports = router;