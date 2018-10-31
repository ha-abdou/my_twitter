"use strict";

const LoginSessions = require('../../../db/models/loginSessions');

function getUserName(req, callback) {
    LoginSessions.findOne({uid: req.cookies.uid}, function (err, doc) {
        if (err)
            console.log("todo err getUserName");
        else
        {
            if (doc)
                callback(doc.user_name);
            else
                callback(null);
        }
    })
}

module.exports = getUserName;