const mongoose = require('../mongoose');

const LoginSessions = mongoose.model('LoginSessions', {
    user_name:       String,
    created_at:      Date,
    uid:      {type: String, index: true},
});

module.exports = LoginSessions;