import {Request, Response, NextFunction} from "express";
import UserInfo from "../interfaces/userInfo.interface";
import User from "../models/user.model";
import JSONError from "../../../util/JSONError";

function newUserController(req: Request, res: Response, next: NextFunction)
{
    let userInfo: UserInfo ;

    if (User.isLogin(req.cookies.uuid))
        return (res.redirect("/"));
    userInfo = {
        email : req.body.email,
        username : req.body.username,
        full_name : req.body.full_name,
        password : req.body.password,
    }
    User.new(userInfo)
        .then((err: any, msg: any)=> {
            if (err)
                res.json(JSONError("cant create new user", err));
            else
                res.json(msg);
        }, (err: any, errMsg: any)=> {
            if (err)
                res.json(JSONError("cant create new user", err));
            else
                res.json(errMsg);
        });
}

export default newUserController;