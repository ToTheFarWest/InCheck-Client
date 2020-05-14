const express = require('express');
const router = express.Router();
let service = require('../service');
const auth = require("../middleware/authorization");

router.get('/', auth, async (req, res) => {
    try {
        const path = '/teams';
        const headers = {
            "Authorization": `Bearer ${req.token}`
        };
        const result = await service.get(path, {headers: headers});
        // console.log(result);
        const teams = result.data.teams;

        res.render('teams', {
            title: "Teams",
            token: req.token,
            teams: teams
        });
    }
    catch (err) {
        console.log(err);
        res.send("ERROR SAD");
    }

});

router.get('/:id', async (req, res) => {
    try{
        res.send(req.params.id);
    }
    catch (err) {
        console.log(err);
        res.send("ERROR");
    }
});

module.exports = router;