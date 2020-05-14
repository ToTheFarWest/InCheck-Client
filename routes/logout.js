const express = require('express');
const router = express.Router();
const service = require('../service');
const auth = require('../middleware/authorization');

router.get('/', auth, async (req, res) => {
    try {
        const path = '/users/logout-all';
        const headers = req.headers;

        const result = await service.get(path, {headers: headers});
        res.clearCookie('token');
        res.redirect('');
    }
    catch (err) {
        res.send("THE SKY IS FALLING");
        console.error(err);
    }
});

module.exports = router;