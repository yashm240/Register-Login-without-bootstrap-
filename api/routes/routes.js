const express = require('express');
const controller = require('../controllers/controller');
const routes = express.Router();

routes.post('/register',controller.Register);
routes.post('/login',controller.Login);

module.exports = routes;