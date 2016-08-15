"use strict";
var EmployeeRepository_1 = require('../repository/EmployeeRepository');
var Promise = require('bluebird');
var EmployeeBusiness = (function () {
    function EmployeeBusiness() {
        this.repository = new EmployeeRepository_1.default();
    }
    EmployeeBusiness.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.repository
                .getAll()
                .then(resolve)
                .catch(reject);
        });
    };
    EmployeeBusiness.prototype.findByID = function (_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.repository
                .findByID(_id)
                .then(resolve)
                .catch(reject);
        });
    };
    EmployeeBusiness.prototype.create = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.repository
                .create(item)
                .then(resolve)
                .catch(reject);
        });
    };
    EmployeeBusiness.prototype.update = function (_id, item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.repository
                .update(_id, item)
                .then(resolve)
                .catch(reject);
        });
    };
    EmployeeBusiness.prototype.patch = function (_id, item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.repository
                .patch(_id, item)
                .then(resolve)
                .catch(reject);
        });
    };
    EmployeeBusiness.prototype.remove = function (_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.repository
                .remove(_id)
                .then(resolve)
                .catch(reject);
        });
    };
    return EmployeeBusiness;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EmployeeBusiness;
//# sourceMappingURL=EmployeeBusiness.js.map