//Module imports
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const routers = require(path.join(__dirname, 'routes'));
const cookieParser = require("cookie-parser");

//Constants
const PORT = process.env.PORT || 5000;

//Init app
const app = express();

//Load View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

//Bind routes
app.use('/', routers.home);
app.use('/login', routers.login);
app.use('/signup', routers.signup);
app.use('/teams', routers.teams);
app.use('/logout', routers.logout);


//Start Server
app.listen(5000, () => {
    console.log(`Server has started on port ${PORT}`);
});