"use strict";
const LoginSessions = require('../../../db/models/loginSessions');

function isLogin(req, callback) {
    LoginSessions.findOne({uid: req.cookies.uid}, function (err, doc) {
        if (err)
            console.log("todo err getProfileInfo");
        else if (!doc)
            callback(0);
        else
            callback(1);
    })
}

module.exports = isLogin;
