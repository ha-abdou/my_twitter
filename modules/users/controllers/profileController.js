"use strict";

const getProfileInfo        = require('../abstractControllers/getProfileInfo');

function profileController(req, res) {
    if (!req.cookies.uid)
        return (res.redirect("/login"));
    getProfileInfo(req, function (doc) {
        if (!doc)
            return (res.redirect("/login"));
        res.render('../modules/users/views/profile', doc);
    });
}

module.exports = profileController;