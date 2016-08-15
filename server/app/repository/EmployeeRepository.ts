import BaseRepository from './base/BaseRepository';
import IEmployeeModel from '../model/interfaces/IEmployeeModel';
import EmployeeModel from '../model/EmployeeModel';

class EmployeeRepository extends BaseRepository<IEmployeeModel> {
    constructor() {
        super(EmployeeModel.getInstance());
    }
}


Object.seal(EmployeeRepository);
export default EmployeeRepository;