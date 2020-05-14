const express = require('express');
const router = express.Router();
let service = require('../service');

router.get('/', (req, res) => {
    res.render('login', {
        title: "Sign In"
    });
});

router.post('/', async (req, res) => {
    console.log(req.body);
    path = 'users/login';
    params = req.body;

    try {
        result = await service.post(path, params);
        // service.user = result.data.user;
        // service.headers = {"Authorization": `Bearer ${result.data.token}`};
        // console.log(service);
        res.cookie('token', result.data.token);
        res.redirect('/');
    }
    catch (err) {
        console.log("ERROR: ", err);
        res.send("ERROR");
    }
});

module.exports = router;