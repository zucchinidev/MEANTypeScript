import * as express from 'express';
import * as bodyParser from 'body-parser';
import MethodOverride from '../MethodOverride';
import BaseRoutes from "../../../config/routes/base/BaseRoutes";

type BodyParseMethod = express.RequestHandler;

class Middlewares {

    static defaultConfiguration(): express.Express {
        const app = express();
        const methods = Middlewares.getBodyParserMethods();
        methods.forEach((method: BodyParseMethod) => app.use(method));
        app.use(MethodOverride.override());
        app.use("/", Middlewares.getLoggerMiddleware());
        app.use(BaseRoutes.routes());
        return app;
    }

    static getBodyParserMethods(): BodyParseMethod[] {
        return [
            bodyParser.urlencoded({
                extended: true
            }),
            bodyParser.json()
        ]
    }

    static getLoggerMiddleware(): express.RequestHandler {
        return (req: express.Request, res: express.Response, next: Function) => {
            console.log(`Request ${req.url} - method: ${req.method}`);
            if (req.body && Object.keys(req.body).length > 0) {
                console.log(`Body: ${JSON.stringify(req.body)}`);
            }
            next();
        }
    }
}

Object.seal(Middlewares);
export default Middlewares;