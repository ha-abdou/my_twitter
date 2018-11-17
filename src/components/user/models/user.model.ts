import UserInfo from "../interfaces/userInfo.interface";
import userValidator from "./user.validator";
import UserSchema from "./userSchema"
import bcrypt from "bcrypt"

function saveNewUser(userInfo: UserInfo, resolve: any, reject: any)
{
    UserSchema.find({$or: [{email: userInfo.email}, {username: userInfo.username}]}, (err1: any, doc: any) => {
        if (err1){
            reject({err1});
            return ;
        }
        else if (doc.length > 0){
            reject({err: null, errMsg: ["Username or Email exist."]});
            return ;
        }
        const newUser = new UserSchema({
            email: userInfo.email,
            full_name: userInfo.full_name,
            username: userInfo.username,
            password: bcrypt.hashSync(userInfo.password, 10),
            level: 1,
            email_checked: 0
        });
        //todo send verification email.
        newUser.save(function (err: any, newDoc: any) {
            if (err)
                reject({err});
            else
                resolve({created: true, msg: "Verification link has been send to your email, pleas click on it."});
        });
    });
}

class User {

    static isLogin(uuid: string): boolean
    {
        return (false);
    }

    static new(userInfo: UserInfo)
    {
        let errors: Array<string> = [];

        errors = userValidator(userInfo);
        const q = new Promise((resolve: any, reject: any) => {
            if (errors.length > 0)
                reject({err: null, errMsg: errors});
            else
                saveNewUser(userInfo, resolve, reject);
        });
        return (q)
    }
}

export default User;
