"use strict";
var methodOverride = require('method-override');
var express = require("express");
var MethodOverride = (function () {
    function MethodOverride() {
    }
    MethodOverride.override = function () {
        var app = express();
        app.use(methodOverride("X-HTTP-Method")); // Microsoft
        app.use(methodOverride("X-HTTP-Method-Override")); // Google/GData
        app.use(methodOverride("X-Method-Override")); // IBM
        app.use(methodOverride("_method"));
        return app;
    };
    return MethodOverride;
}());
Object.seal(MethodOverride);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MethodOverride;
//# sourceMappingURL=MethodOverride.js.map