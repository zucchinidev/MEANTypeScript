import IEmployeeModel from './interfaces/IEmployeeModel';
import * as mongoose from 'mongoose';
import Employee from '../dataAccess/model/Employee';

class EmployeeModel {
    public static instance: mongoose.Model<IEmployeeModel>;
    static getInstance() {
        if (typeof EmployeeModel.instance === 'undefined') {
            EmployeeModel.instance = Employee.getModel();
        }
        return EmployeeModel.instance;
    }
}

export default EmployeeModel;

