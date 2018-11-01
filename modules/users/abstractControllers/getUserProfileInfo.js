"use strict";

const User          = require('../../../db/models/user');

function getUserProfileInfo(user_name, callback) {
    User.findOne({user_name}, function (err, doc) {
        if (err)
            console.log("todo err getProfileInfo");
        else
            callback(doc);
    })

}

module.exports = getUserProfileInfo;