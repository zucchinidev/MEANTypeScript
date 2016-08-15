import IBaseBusiness from './interface/base/IBaseBusiness';
import IEmployeeModel from '../model/interfaces/IEmployeeModel';
import EmployeeRepository from '../repository/EmployeeRepository';
import * as Promise from 'bluebird';

class EmployeeBusiness implements IBaseBusiness<IEmployeeModel> {
    public repository: EmployeeRepository;

    constructor() {
        this.repository = new EmployeeRepository();
    }

    getAll(): Promise<Array<IEmployeeModel>> {
        return new Promise<Array<IEmployeeModel>>((resolve, reject) => {
            return this.repository
                .getAll()
                .then(resolve)
                .catch(reject);
        });
    }

    findByID(_id: string): Promise<IEmployeeModel> {
        return new Promise<IEmployeeModel>((resolve, reject) => {
            this.repository
                .findByID(_id)
                .then(resolve)
                .catch(reject);
        });
    }

    create(item: IEmployeeModel): Promise<IEmployeeModel> {
        return new Promise<IEmployeeModel>((resolve, reject) => {
            this.repository
                .create(item)
                .then(resolve)
                .catch(reject);
        });
    }

    update(_id: string, item: IEmployeeModel): Promise<Object> {
        return new Promise<IEmployeeModel>((resolve, reject) => {
            this.repository
                .update(_id, item)
                .then(resolve)
                .catch(reject);
        });
    }

    patch(_id: string, item: IEmployeeModel): Promise<Object> {
        return new Promise<IEmployeeModel>((resolve, reject) => {
            this.repository
                .patch(_id, item)
                .then(resolve)
                .catch(reject);
        });
    }

    remove(_id: string): Promise<any> {
        return new Promise<IEmployeeModel>((resolve, reject) => {
            this.repository
                .remove(_id)
                .then(resolve)
                .catch(reject);
        });
    }
}

export default EmployeeBusiness;
