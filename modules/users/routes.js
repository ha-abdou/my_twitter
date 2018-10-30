"use strict";

const express               = require('express');
const router                = express.Router();
const User                  = require('../../db/models/user');
const createUserController  = require('./controllers/createUserController');
const checkForUewUser       = require('./controllers/checkForUewUser');
const login                 = require('./controllers/login');

router.get('/signin', function(req, res) {
    res.render('../modules/users/views/signin');
});

router.get('/login', function(req, res) {
    res.render('../modules/users/views/login');
});

router.post('/login', function(req, res) {
    login(User, req, res);
});

router.post('/signin', function(req, res) {
    createUserController(User, req, res);
});

router.post('/check_for_new_user', function(req, res) {
    checkForUewUser(User, req, res);
});

module.exports = router;
