"use strict";

const express               = require('express');
const router                = express.Router();
const isLogin               = require("../users/abstractControllers/isLogin");
const getUserName           = require("../users/abstractControllers/getUserName");
const getUserProfileInfo    = require("../users/abstractControllers/getUserProfileInfo");
const newTweetController    = require("./controllers/newTweetController");
const tweetsListController  = require("./controllers/tweetsListController");

router.get('/tweets/new', function(req, res) {
    isLogin(req, function (is) {
        if (!is)
            return (res.redirect("/login"));
        res.render('../modules/tweets/views/new_tweet');
    });
});

router.get('/tweets/:user_name', function(req, res, next) {
    tweetsListController(req, res, next);
});

router.post('/tweets/new', function(req, res) {
    isLogin(req, function (is) {
        if (!is)
            return (res.redirect("/login"));
        newTweetController(req, res);
    });
});

module.exports = router;
