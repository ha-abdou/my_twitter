import {Response, Request} from "express";
import express from "express";

const userAPIRoutes = express.Router({strict: true});

userAPIRoutes.post("/user/new", function(req: Request, res: Response) {
    res.json({data: "dsfrasdf"});
});

export default userAPIRoutes;