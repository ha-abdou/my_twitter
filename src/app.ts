import {Request, Response} from "express";
import express from "express";
import path from "path";
import createError from "http-errors";
import cookieParser from "cookie-parser";
import logger from "morgan";
import bodyParser from "body-parser";

class App{
    app: express.Application;

    constructor ()
    {
        this.app = express();
        this.bootstrap();
        this.loadRoutes();
    }

    private bootstrap()
    {
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "pug");
        this.app.use(logger("dev"));
        this.app.use(cookieParser());
        this.app.use(bodyParser.json({limit: "1mb"}));
        this.app.use(bodyParser.urlencoded({limit: "1mb", extended: true}));
        this.app.use(express.static(path.join(__dirname, "public")));
    }

    private loadRoutes()
    {
        this.app.use('/', (req: Request, res: Response)=> {
            res.render("index");
        });
    }
    
    private errorHandler ()
    {

    }
}

export default App;