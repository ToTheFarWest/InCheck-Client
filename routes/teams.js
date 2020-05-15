const express = require('express');
const router = express.Router();
let service = require('../service');
const auth = require("../middleware/authorization");

router.get('/', auth, async (req, res) => {
    try {
        const path = '/teams';
        // const headers = {
        //     "Authorization": `Bearer ${req.token}`
        // };
        const result = await service.get(path, {headers: req.headers});
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

router.get('/:id', auth, async (req, res) => {
    try{
        let path = `/teams/${req.params.id}`;
        let result = await service.get(path, {headers: req.headers});
        const team = result.data.team;

        path = `/teams/${req.params.id}/messages`;
        result = await service.get(path, {headers: req.headers});
        const messages = result.data.messages;

        messages.forEach(async message => {
            // path = `/users/${message.author}`
            // message.author.name = await service.get();
            // console.log(message.author);
        });

        res.render('team', {
            title: team.name,
            team: team,
            messages: messages
        });
        // res.send(req.params.id);
    }
    catch (err) {
        console.log(err);
        res.send("ERROR");
    }
});

router.post('/:id/send', auth, async (req, res) => {
    try {
        let path = `/teams/${req.params.id}/messages`;
        let params = req.body;
        let result = await service.post(path, params, {headers: req.headers});
        res.redirect(`/teams/${req.params.id}`);
    } catch (err) {
        console.log(err);
        res.send("ERROR");
    }
});

module.exports = router;