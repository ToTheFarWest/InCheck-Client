const axios = require("axios");

//Defining service for communicating with backend
let service = axios.create({
    baseURL: "http://localhost:5001/",
    responseType: "json"
});

module.exports = service;