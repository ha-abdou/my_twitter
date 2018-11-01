"use strict";
const bcrypt = require('bcrypt');

//todo check if is real email
function createUserController(User, req, res) {
    if (!req.body.email || !req.body.user_name || req.body.full_name || req.body.password)
        return res.json({err: null, msg: "all form should be fill"});
    const newUser = new User({
        email: req.body.email,
        full_name: req.body.full_name,
        user_name: req.body.user_name,
        password: bcrypt.hashSync(req.body.password, 10),
        level: 1,//1 for normal sign-in user
        email_checked: 0
    });
    newUser.save(function (err, newDoc) {
        //todo send email
        res.end({err, msg: "Verification link has been send to your email, pleas click on it."})
    });
}

module.exports = createUserController;