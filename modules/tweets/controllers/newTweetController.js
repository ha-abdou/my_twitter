"use strict";

const getUserName = require("../../users/abstractControllers/getUserName");
const Tweet       = require("../../../db/models/tweet");

function newTweetController(req, res) {
    getUserName(req, function (userName) {
        if (!userName)
            return (res.redirect("/login"));
        let tweet = new Tweet({content: req.body.content, user_name: userName, created_at: new Date()});

        tweet.save(function (err, doc) {
            if (err)
                console.log("todo err newTweetController");
            else
                res.redirect("/tweets/" + userName);
        })
    })
}

module.exports = newTweetController;