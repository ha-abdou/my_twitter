const mongoose = require('../mongoose');

const Tweet = mongoose.model('Tweet', {
    content:        String,
    user_name:      {type: String, index: true},
    created_at:     Date
});

module.exports = Tweet;