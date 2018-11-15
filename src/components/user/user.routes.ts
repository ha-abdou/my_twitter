import {Response, Request} from "express";
import express from "express";

const userRoutes = express.Router({strict: true});

userRoutes.get("/user/signin", function(req: Request, res: Response) {
    res.render("../components/user/views/signin", {title: "Singnin page"});
});

export default userRoutes;