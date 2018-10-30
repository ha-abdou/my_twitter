"use strict";
const bcrypt = require('bcrypt');

//todo if email checked
//todo correct cookies
function login(User, req, res) {
    if (!req.body.user_name || !req.body.password)
        return res.redirect("/login?error=true");
    User.findOne({user_name: req.body.user_name}, function (err, doc) {
        if (err)
            res.json({err, msg: "err on login"});
        else
        {
            if (doc && bcrypt.compareSync(req.body.password, doc.password))
            {
                //todo remove this
                res.cookie('user_name', req.body.user_name, {maxAge: 900000000, httpOnly: true});
                res.redirect("/");
            }
            else
                res.redirect("/login?error=true");
        }
    })
}

module.exports = login;