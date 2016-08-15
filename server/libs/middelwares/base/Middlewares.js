"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var MethodOverride_1 = require('../MethodOverride');
var BaseRoutes_1 = require("../../../config/routes/base/BaseRoutes");
var Middlewares = (function () {
    function Middlewares() {
    }
    Middlewares.defaultConfiguration = function () {
        var app = express();
        var methods = Middlewares.getBodyParserMethods();
        methods.forEach(function (method) { return app.use(method); });
        app.use(MethodOverride_1.default.override());
        app.use("/", Middlewares.getLoggerMiddleware());
        app.use(BaseRoutes_1.default.routes());
        return app;
    };
    Middlewares.getBodyParserMethods = function () {
        return [
            bodyParser.urlencoded({
                extended: true
            }),
            bodyParser.json()
        ];
    };
    Middlewares.getLoggerMiddleware = function () {
        return function (req, res, next) {
            console.log("Request " + req.url + " - method: " + req.method);
            if (req.body && Object.keys(req.body).length > 0) {
                console.log("Body: " + JSON.stringify(req.body));
            }
            next();
        };
    };
    return Middlewares;
}());
Object.seal(Middlewares);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Middlewares;
//# sourceMappingURL=Middlewares.js.map