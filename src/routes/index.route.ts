import {Response, Request} from "express";
import express from "express";

const indexRoute = express.Router({strict: true});

indexRoute.get("/", function(req: Request, res: Response) {
    res.render("index");
});

export default indexRoute;