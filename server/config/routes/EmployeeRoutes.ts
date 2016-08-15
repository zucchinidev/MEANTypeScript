import * as express from 'express';
import EmployeeController from '../../app/controllers/EmployeeController';


class EmployeeRoutes {
    private static router: express.Router = express.Router();
    private _controller: EmployeeController;

    constructor() {
        this._controller = new EmployeeController();
    }

    get controller(): EmployeeController {
        return this._controller;
    }

    getRoutes(): express.Router {
        let router = EmployeeRoutes.router;
        router.get('/employees', this.controller.getAll);
        router.get('/employees/:id', this.controller.findById);
        router.post('/employees', this.controller.create);
        router.put('/employees', this.controller.update);
        router.patch('/employees', this.controller.patch);
        router.delete('/employees/:id', this.controller.remove);
        return router;
    }
}


Object.seal(EmployeeRoutes);
export default EmployeeRoutes;