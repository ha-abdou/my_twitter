"use strict";

const getUserName           = require("../../users/abstractControllers/getUserName");
const getUserProfileInfo    = require("../../users/abstractControllers/getUserProfileInfo");
const getUserTweets         = require("../../tweets/abstractControllers/getUserTweets");

function tweetsListController(req, res, next) {
    let loggedUserName = "";
    let wantedUserInfo = {};
    let tweets = [];
    let tasks = 2;

    getUserProfileInfo(req.params.user_name, function (userInfo) {
        if (!userInfo)
            return (next());
        wantedUserInfo = userInfo;
        getUserTweets(req.params.user_name, function (twts) {
            tweets = twts;
            tasks--;
            render(loggedUserName, wantedUserInfo, res, tweets, tasks);
        })
    });
    getUserName(req, function (userName) {
        loggedUserName = userName;
        tasks--;
        render(loggedUserName, wantedUserInfo, res, tweets, tasks);
    });
}

function render(userName, userInfo, res, tweets, tasks) {
    if (tasks !== 0)
        return (0);
    res.render('../modules/tweets/views/tweets_list', {userInfo, userName, tweets});
}

module.exports = tweetsListController;