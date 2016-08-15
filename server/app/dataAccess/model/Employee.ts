import * as mongoose from 'mongoose';
import IEmployeeModel from '../../model/interfaces/IEmployeeModel';
import EmployeeScheme from '../schemas/EmployeesSchema';

export default class Employee {
    public static Model: mongoose.Model<IEmployeeModel>;
    static getModel() {
        if (typeof Employee.Model === 'undefined') {
            Employee.Model = mongoose.model<IEmployeeModel>('Employee', new EmployeeScheme().schema)
        }
        return Employee.Model;
    }
}
