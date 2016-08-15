"use strict";
var Middlewares_1 = require('./libs/middelwares/base/Middlewares');
var express = require('express');
var port = process.env.port || 8080;
var app = express();
function init() {
    app.use(express.static('public'));
    app.use(Middlewares_1.default.defaultConfiguration());
    app.listen(port, function () {
        console.log("NodeJS & Typescript listen port 8080");
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = init;
//# sourceMappingURL=server.js.map