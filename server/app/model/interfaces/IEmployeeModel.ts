import IModel from './IModel';

interface IEmployeeModel extends IModel {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;

}

export default IEmployeeModel;
