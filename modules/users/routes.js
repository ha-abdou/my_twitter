"use strict";

const express               = require('express');
const router                = express.Router();
const User                  = require('../../db/models/user');
const createUserController  = require('./controllers/createUserController');
const profileController     = require('./controllers/profileController');
const checkForUewUser       = require('./controllers/checkForUewUser');
const login                 = require('./controllers/login');
const getUserName           = require('./abstractControllers/getUserName');
const isLogin               = require('./abstractControllers/isLogin');

router.get('/signin', function(req, res) {
    res.render('../modules/users/views/signin');
});

router.get('/login', function(req, res) {
    isLogin(req, function (is) {
        if (is)
            return (res.redirect("/profile"));
        res.render('../modules/users/views/login');
    });
});

router.get('/logout', function(req, res) {
    res.cookie('uid', "", { maxAge: 1, httpOnly: true });
    res.redirect("/");
});

router.get('/profile', function(req, res) {
    getUserName(req, function (userName) {
        if (!userName)
            return (res.redirect("/login"));
        res.redirect("/tweets/" + userName)
    });
    //profileController(req, res);
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
