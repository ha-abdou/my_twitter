"use strict";

const express               = require('express');
const router                = express.Router();
const User                  = require('../../db/models/user');
const createUserController  = require('./controllers/createUserController');
const checkForUewUser       = require('./controllers/checkForUewUser');

router.get('/signin', function(req, res) {
    res.render('../modules/users/views/signin');
});

router.post('/signin', function(req, res) {
    createUserController(User, req, res);
});

router.post('/check_for_new_user', function(req, res) {
    checkForUewUser(User, req, res);
});

module.exports = router;
