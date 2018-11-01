"use strict";

const Tweets = require("../../../db/models/tweet");

function getUserTweets(userName, callback) {
    Tweets.find({user_name: userName}, function (err, docs) {
        if (err)
            console.log("todo err getUserTweets");
        else
            callback(docs);
    })
}

module.exports = getUserTweets;
