import {Response, Request} from "express";
import express from "express";
import newUserController from "./contollers/newUser.controller"

const userAPIRoutes = express.Router({strict: true});

userAPIRoutes.post("/user/new", newUserController);

export default userAPIRoutes;