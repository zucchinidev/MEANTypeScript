"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseRepository_1 = require('./base/BaseRepository');
var EmployeeModel_1 = require('../model/EmployeeModel');
var EmployeeRepository = (function (_super) {
    __extends(EmployeeRepository, _super);
    function EmployeeRepository() {
        _super.call(this, EmployeeModel_1.default.getInstance());
    }
    return EmployeeRepository;
}(BaseRepository_1.default));
Object.seal(EmployeeRepository);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EmployeeRepository;
//# sourceMappingURL=EmployeeRepository.js.map