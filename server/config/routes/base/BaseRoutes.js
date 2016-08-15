"use strict";
var express = require('express');
var EmployeeRoutes_1 = require('../EmployeeRoutes');
var app = express();
var BaseRoutes = (function () {
    function BaseRoutes() {
    }
    BaseRoutes.routes = function () {
        var employeeRoutes = new EmployeeRoutes_1.default();
        app.use("/", employeeRoutes.getRoutes());
        return app;
    };
    return BaseRoutes;
}());
Object.seal(BaseRoutes);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BaseRoutes;
//# sourceMappingURL=BaseRoutes.js.map