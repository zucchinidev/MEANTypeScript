import * as express from 'express';
import EmployeeBusiness from '../business/EmployeeBusiness';
import IBaseController from './interfaces/base/IBaseController';
import IEmployeeModel from "../model/interfaces/IEmployeeModel";


class EmployeeController implements IBaseController<EmployeeBusiness> {
    getAll(req: express.Request, res: express.Response): void {
        try {
            let employeeBusiness = new EmployeeBusiness();
            employeeBusiness
                .getAll()
                .then((response) => res.send(response))
                .catch((err) => res.send({error: err.message}));
        } catch (e) {
            console.log(e);
            res.send({error: "error in your request"});
        }
    }

    findById(req: express.Request, res: express.Response): void {
        try {
            let employeeBusiness = new EmployeeBusiness();
            const id = req.params.id;
            employeeBusiness
                .findByID(id)
                .then((response) => res.send(response))
                .catch((err) => res.send({error: err.message}));
        } catch (e) {
            console.log(e);
            res.send({error: "error in your request"});
        }
    }

    create(req: express.Request, res: express.Response): void {
        try {
            let model = <IEmployeeModel> req.body;
            let employeeBusiness = new EmployeeBusiness();
            employeeBusiness
                .create(model)
                .then((response) => res.send(response))
                .catch((err) => res.send({error: err.message}));
        } catch (e) {
            console.log(e);
            res.send({error: "error in your request"});
        }
    }

    update(req: express.Request, res: express.Response): void {
        try {
            let model = <IEmployeeModel> req.body;
            let employeeBusiness = new EmployeeBusiness();
            let id = model._id;
            if (typeof id === 'undefined' || id === null) {
                res.send({error: "error in your request, id undefined"});
                return;
            }
            employeeBusiness
                .update(id, model)
                .then((response) => res.send(response))
                .catch((err) => res.send({error: err.message}));
        } catch (e) {
            console.log(e);
            res.send({error: "error in your request"});
        }
    }

    patch(req: express.Request, res: express.Response): void {
        try {
            let model = <IEmployeeModel> req.body;
            let employeeBusiness = new EmployeeBusiness();
            let id = model._id;
            if (typeof id === 'undefined' || id === null) {
                res.send({error: "error in your request, id undefined"});
                return;
            }
            employeeBusiness
                .patch(id, model)
                .then((response) => res.send(response))
                .catch((err) => res.send({error: err.message}));
        } catch (e) {
            console.log(e);
            res.send({error: "error in your request"});
        }
    }

    remove(req: express.Request, res: express.Response): void {
        try {
            let employeeBusiness = new EmployeeBusiness();
            const id = req.params.id;
            employeeBusiness
                .remove(id)
                .then((response) => res.send(response))
                .catch((err) => res.send({error: err.message}));
        } catch (e) {
            console.log(e);
            res.send({error: "error in your request"});
        }
    }
}

Object.seal(EmployeeController);
export default EmployeeController;
