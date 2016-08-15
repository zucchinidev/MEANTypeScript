"use strict";
var Employee_1 = require('../dataAccess/model/Employee');
var EmployeeModel = (function () {
    function EmployeeModel() {
    }
    EmployeeModel.getInstance = function () {
        if (typeof EmployeeModel.instance === 'undefined') {
            EmployeeModel.instance = Employee_1.default.getModel();
        }
        return EmployeeModel.instance;
    };
    return EmployeeModel;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EmployeeModel;
//# sourceMappingURL=EmployeeModel.js.map