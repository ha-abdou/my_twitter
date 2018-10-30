const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/my_twitter');



module.exports = mongoose;