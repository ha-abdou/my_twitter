import {Request, Response, NextFunction} from "express";
import express from "express";
import path from "path";
import createError from "http-errors";
import cookieParser from "cookie-parser";
import logger from "morgan";
import bodyParser from "body-parser";
import indexRoute from "./routes/index.route"
import userRoutes from "./components/user/user.routes"
import userAPIRoutes from "./components/user/userAPI.route"

class App{
    app: express.Application;

    constructor ()
    {
        this.app = express();
        this.bootstrap();
        this.loadRoutes();
        this.errorHandler();
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
        this.app.use(indexRoute);
        this.app.use(userRoutes);
        this.app.use("/api", userAPIRoutes);
        this.app.use((req: Request, res: Response, next: NextFunction) => next(createError(404)));
    }
    
    private errorHandler ()
    {
        this.app.use((err: any, req: Request, res: Response, next: NextFunction) => {
            res.locals.message = err.message;
            res.locals.error = process.env.ONDEV === 'true' ? err: {status: "", stack: ""};
            res.status(err.status || 500);
            res.render('error');
        });
    }
}

export default App;