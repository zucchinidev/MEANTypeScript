import * as mongoose from 'mongoose';
import Constants from  '../../config/constants/Constants';

class DBConnect {
    public static db: mongoose.Connection;
    public static instance: any;
    static connect() {
        if (typeof DBConnect.instance !== 'undefined') {
            return DBConnect.instance;
        }
        DBConnect.db = mongoose.connection;
        DBConnect.instance = mongoose.connect(Constants.DB_CONNECTION_STRING);
        DBConnect.db.on('error', console.error.bind(console, 'console error:'));
        DBConnect.db.once('open', () => {
            console.log('Connected to mongodb');
        });
    }
}

DBConnect.connect();
export default DBConnect;

