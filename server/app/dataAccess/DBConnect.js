"use strict";
var mongoose = require('mongoose');
var Constants_1 = require('../../config/constants/Constants');
var DBConnect = (function () {
    function DBConnect() {
    }
    DBConnect.connect = function () {
        if (typeof DBConnect.instance !== 'undefined') {
            return DBConnect.instance;
        }
        DBConnect.db = mongoose.connection;
        DBConnect.instance = mongoose.connect(Constants_1.default.DB_CONNECTION_STRING);
        DBConnect.db.on('error', console.error.bind(console, 'console error:'));
        DBConnect.db.once('open', function () {
            console.log('Connected to mongodb');
        });
    };
    return DBConnect;
}());
DBConnect.connect();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DBConnect;
//# sourceMappingURL=DBConnect.js.map