let service = require('../service');

const auth = async function (req, res, next) {
    try {
        const token = req.cookies.token;
        if (token) {
            req.token = token;
            req.headers = {
                "Authorization": `Bearer ${token}`
            };
            next();
        }
        else {
            res.redirect('/login');
        }
    }
    catch (err) {
        console.log("Attempting redirect...");
        res.redirect('/login');
    }
};

module.exports = auth;