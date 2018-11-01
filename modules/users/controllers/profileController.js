"use strict";

const getLoggedProfileInfo        = require('../abstractControllers/getLoggedProfileInfo');

function profileController(req, res) {
    if (!req.cookies.uid)
        return (res.redirect("/login"));
    getLoggedProfileInfo(req, function (doc) {
        if (!doc)
            return (res.redirect("/login"));
        res.render('../modules/users/views/profile', doc);
    });
}

module.exports = profileController;