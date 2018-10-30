const mongoose = require('../mongoose');

const User = mongoose.model('User', {
    email:          String,
    full_name:      String,
    password:       String,
    user_name:      {type: String, index: true},
    level:          Number,
    email_checked:  Boolean
});

module.exports = User;