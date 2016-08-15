import * as express from 'express';


interface IReadController {
    getAll(req: express.Request, res: express.Response): void;
    findById(req: express.Request, res: express.Response): void;
}
export default IReadController;
