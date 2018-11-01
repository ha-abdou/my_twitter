"use strict";

const LoginSessions = require('../../../db/models/loginSessions');
const User          = require('../../../db/models/user');

function getLoggedProfileInfo(req, callback) {
    LoginSessions.findOne({uid: req.cookies.uid}, function (err, doc) {
        if (err)
            console.log("todo err getProfileInfo");
        else
        {
            User.findOne({user_name: doc.user_name}, function (err1, doc1) {
                if (err1)
                    console.log("todo err getProfileInfo");
                else
                    callback(doc1);
            })
        }
    })
}

module.exports = getLoggedProfileInfo;