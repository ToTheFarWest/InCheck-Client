const express = require('express');
const router = express.Router();
let service = require('../service');
const auth = require("../middeware/authorization");

router.get('/', auth, (req, res) => {
    res.render('teams', {
        title: "Teams",
        token: req.token,
        teams: [
            {name: "the boys", id: "itstheboysid"},
            {name: "are back", id: "webackid"}
        ]
    });
});

module.exports = router;