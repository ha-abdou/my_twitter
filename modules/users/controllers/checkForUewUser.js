"use strict";

function checkForUewUser(User, req, res) {
    User.find({email: req.body.email},function (err, doc) {
        if (err)
            res.json({err, msg: "todo error on checkForUewUser."});
        else if (doc.length > 0)
            res.json({err, msg: "email exist!"});
        else
        {
            User.find({user_name: req.body.user_name},function (err1, doc1) {
                if (err1)
                    res.json({err1, msg: "todo error on checkForUewUser."});
                else if (doc1.length > 0)
                    res.json({err1, msg: "user name exist!"});
                else
                    res.json({err1, msg: "ok"});
            });
        }
    });
}

module.exports = checkForUewUser;