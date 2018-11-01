"use strict";
const bcrypt        = require('bcrypt');
const uuid          = require('uuid/v4');
const LoginSessions = require('../../../db/models/loginSessions');

//todo if email checked
function login(User, req, res) {
    if (!req.body.user_name || !req.body.password)
        return res.redirect("/login?error=true");
    User.findOne({user_name: req.body.user_name}, function (err, doc) {
        if (err)
            res.json({err, msg: "err on login"});
        else
        {
            if (doc && bcrypt.compareSync(req.body.password, doc.password))
                saveSession(res, req.body.user_name);
            else
                res.redirect("/login?error=true");
        }
    })
}

function saveSession(res, user_name)
{
    let uid = uuid();
    let session = new LoginSessions({uid, user_name, created_at: new Date()});

    session.save(function (err, newDoc) {
        console.log(err);
        if (err)
            console.log("todo error save sessions.");
        else
        {
            res.cookie('uid', uid, {maxAge: 900000000, httpOnly: true});
            res.redirect("/profile");
        }
    });
}

module.exports = login;