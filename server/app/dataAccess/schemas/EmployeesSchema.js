"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseSchema_1 = require('./BaseSchema');
var EmployeesSchema = (function (_super) {
    __extends(EmployeesSchema, _super);
    function EmployeesSchema() {
        _super.call(this);
    }
    Object.defineProperty(EmployeesSchema.prototype, "schema", {
        get: function () {
            return EmployeesSchema.createSchema(EmployeesSchema.getDefaultSchema());
        },
        enumerable: true,
        configurable: true
    });
    EmployeesSchema.getDefaultSchema = function () {
        return {
            firstName: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            },
            address: {
                type: String,
                required: false
            },
            phone: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            }
        };
    };
    return EmployeesSchema;
}(BaseSchema_1.default));
Object.seal(EmployeesSchema);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EmployeesSchema;
//# sourceMappingURL=EmployeesSchema.js.map