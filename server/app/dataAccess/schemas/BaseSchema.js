"use strict";
var DBConnect_1 = require('../DBConnect');
var mongoose = require('mongoose');
var BaseSchema = (function () {
    function BaseSchema() {
        DBConnect_1.default.connect();
        this.dbConnection = DBConnect_1.default.db;
        this.dbInstance = DBConnect_1.default.instance;
    }
    BaseSchema.createSchema = function (params) {
        return new mongoose.Schema(params);
    };
    return BaseSchema;
}());
Object.seal(BaseSchema);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BaseSchema;
//# sourceMappingURL=BaseSchema.js.map