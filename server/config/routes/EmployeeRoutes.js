"use strict";
var express = require('express');
var EmployeeController_1 = require('../../app/controllers/EmployeeController');
var EmployeeRoutes = (function () {
    function EmployeeRoutes() {
        this._controller = new EmployeeController_1.default();
    }
    Object.defineProperty(EmployeeRoutes.prototype, "controller", {
        get: function () {
            return this._controller;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeRoutes.prototype.getRoutes = function () {
        var router = EmployeeRoutes.router;
        router.get('/employees', this.controller.getAll);
        router.get('/employees/:id', this.controller.findById);
        router.post('/employees', this.controller.create);
        router.put('/employees', this.controller.update);
        router.patch('/employees', this.controller.patch);
        router.delete('/employees/:id', this.controller.remove);
        return router;
    };
    EmployeeRoutes.router = express.Router();
    return EmployeeRoutes;
}());
Object.seal(EmployeeRoutes);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EmployeeRoutes;
//# sourceMappingURL=EmployeeRoutes.js.map