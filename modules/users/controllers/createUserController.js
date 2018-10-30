"use strict";

function createUserController(User, req, res) {
    const newUser = new User({
        email: req.body.email,
        full_name: req.body.full_name,
        user_name: req.body.user_name,
        password: req.body.password,
        level: 1,//1 for normal sign-in user
        email_checked: 0
    });
    newUser.save().then(function (err, newDoc) {
        //todo send email
        res.end({err, msg: "Verification link has been send to your email, pleas click on it."})
    });
}

module.exports = createUserController;