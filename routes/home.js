const express = require('express');

router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Landing'
    });
});

module.exports = router;