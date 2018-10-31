"use strict";

const express               = require('express');
const router                = express.Router();

router.get('/home', function(req, res) {
    isLogin(req, function (level) {

    });
});


module.exports = router;
