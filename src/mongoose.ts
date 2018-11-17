import mongoose from "mongoose"

mongoose.connect('mongodb://mongo:27017/my_twitter', {useNewUrlParser: true});

export default mongoose