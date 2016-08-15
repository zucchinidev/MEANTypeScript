///<reference path="../../../../typings/main.d.ts"/>
"use strict";
var mongoose = require('mongoose');
var BaseRepository = (function () {
    function BaseRepository(mongooseModel) {
        this._model = mongooseModel;
    }
    Object.defineProperty(BaseRepository.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: true,
        configurable: true
    });
    BaseRepository.prototype.getAll = function () {
        return this.model.find({}).exec();
    };
    BaseRepository.prototype.findByID = function (_id) {
        return this.model.findById({ _id: BaseRepository.toObjectId(_id) }).exec();
    };
    BaseRepository.prototype.create = function (item) {
        return this.model.create(item);
    };
    BaseRepository.prototype.update = function (_id, item) {
        return this.model.update({ _id: BaseRepository.toObjectId(_id) }, item).exec();
    };
    BaseRepository.prototype.patch = function (_id, item) {
        // mongoose never replaces the whole model
        return this.model.update({ _id: BaseRepository.toObjectId(_id) }, item).exec();
    };
    BaseRepository.prototype.remove = function (_id) {
        return this.model.remove({ _id: BaseRepository.toObjectId(_id) }).exec();
    };
    BaseRepository.toObjectId = function (_id) {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    };
    return BaseRepository;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BaseRepository;
//# sourceMappingURL=BaseRepository.js.map