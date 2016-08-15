import * as express from 'express';


interface IWriteController {
    create(req: express.Request, res: express.Response): void;
    update(req: express.Request, res: express.Response): void;
    remove(req: express.Request, res: express.Response): void;
}
export default IWriteController;

