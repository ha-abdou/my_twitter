import mongoose from "../../../mongoose"

const UserSchema = mongoose.model('User', {
    email:          String,
    full_name:      String,
    password:       String,
    username:      {type: String, index: true},
    level:          Number,
    email_checked:  Boolean
});

export default UserSchema;