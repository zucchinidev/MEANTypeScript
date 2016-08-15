"use strict";
var EmployeeBusiness_1 = require('../business/EmployeeBusiness');
var EmployeeController = (function () {
    function EmployeeController() {
    }
    EmployeeController.prototype.getAll = function (req, res) {
        try {
            var employeeBusiness = new EmployeeBusiness_1.default();
            employeeBusiness
                .getAll()
                .then(function (response) { return res.send(response); })
                .catch(function (err) { return res.send({ error: err.message }); });
        }
        catch (e) {
            console.log(e);
            res.send({ error: "error in your request" });
        }
    };
    EmployeeController.prototype.findById = function (req, res) {
        try {
            var employeeBusiness = new EmployeeBusiness_1.default();
            var id = req.params.id;
            employeeBusiness
                .findByID(id)
                .then(function (response) { return res.send(response); })
                .catch(function (err) { return res.send({ error: err.message }); });
        }
        catch (e) {
            console.log(e);
            res.send({ error: "error in your request" });
        }
    };
    EmployeeController.prototype.create = function (req, res) {
        try {
            var model = req.body;
            var employeeBusiness = new EmployeeBusiness_1.default();
            employeeBusiness
                .create(model)
                .then(function (response) { return res.send(response); })
                .catch(function (err) { return res.send({ error: err.message }); });
        }
        catch (e) {
            console.log(e);
            res.send({ error: "error in your request" });
        }
    };
    EmployeeController.prototype.update = function (req, res) {
        try {
            var model = req.body;
            var employeeBusiness = new EmployeeBusiness_1.default();
            var id = model._id;
            if (typeof id === 'undefined' || id === null) {
                res.send({ error: "error in your request, id undefined" });
                return;
            }
            employeeBusiness
                .update(id, model)
                .then(function (response) { return res.send(response); })
                .catch(function (err) { return res.send({ error: err.message }); });
        }
        catch (e) {
            console.log(e);
            res.send({ error: "error in your request" });
        }
    };
    EmployeeController.prototype.patch = function (req, res) {
        try {
            var model = req.body;
            var employeeBusiness = new EmployeeBusiness_1.default();
            var id = model._id;
            if (typeof id === 'undefined' || id === null) {
                res.send({ error: "error in your request, id undefined" });
                return;
            }
            employeeBusiness
                .patch(id, model)
                .then(function (response) { return res.send(response); })
                .catch(function (err) { return res.send({ error: err.message }); });
        }
        catch (e) {
            console.log(e);
            res.send({ error: "error in your request" });
        }
    };
    EmployeeController.prototype.remove = function (req, res) {
        try {
            var employeeBusiness = new EmployeeBusiness_1.default();
            var id = req.params.id;
            employeeBusiness
                .remove(id)
                .then(function (response) { return res.send(response); })
                .catch(function (err) { return res.send({ error: err.message }); });
        }
        catch (e) {
            console.log(e);
            res.send({ error: "error in your request" });
        }
    };
    return EmployeeController;
}());
Object.seal(EmployeeController);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EmployeeController;
//# sourceMappingURL=EmployeeController.js.map