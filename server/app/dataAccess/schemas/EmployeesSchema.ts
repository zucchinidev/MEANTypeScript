import BaseSchema from './BaseSchema';
import * as mongoose from 'mongoose';

class EmployeesSchema extends BaseSchema{

    constructor() {
        super();
    }

    get schema() : mongoose.Schema {
        return EmployeesSchema.createSchema(EmployeesSchema.getDefaultSchema());
    }

    static getDefaultSchema(): Object {
        return {
            firstName : {
                type: String,
                required: true
            },
            lastName : {
                type: String,
                required: true
            },
            address : {
                type: String,
                required: false
            },
            phone : {
                type: String,
                required: true
            },
            email : {
                type: String,
                required: true
            }
        };
    }
}

Object.seal(EmployeesSchema);
export default EmployeesSchema;