"use strict";
var mongoose = require('mongoose');
var EmployeesSchema_1 = require('../schemas/EmployeesSchema');
var Employee = (function () {
    function Employee() {
    }
    Employee.getModel = function () {
        if (typeof Employee.Model === 'undefined') {
            Employee.Model = mongoose.model('Employee', new EmployeesSchema_1.default().schema);
        }
        return Employee.Model;
    };
    return Employee;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Employee;
//# sourceMappingURL=Employee.js.map