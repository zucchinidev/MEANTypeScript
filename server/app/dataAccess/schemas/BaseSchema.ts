import DBConnect from '../DBConnect';
import * as mongoose from 'mongoose';


class BaseSchema {
    dbInstance:  any;
    dbConnection:  mongoose.Connection;
    constructor() {
        DBConnect.connect();
        this.dbConnection = DBConnect.db;
        this.dbInstance = DBConnect.instance;
    }

    static createSchema(params: Object): mongoose.Schema {
        return new mongoose.Schema(params);
    }
}

Object.seal(BaseSchema);
export default BaseSchema;
