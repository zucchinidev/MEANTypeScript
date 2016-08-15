///<reference path="../../../../typings/main.d.ts"/>

import IRead from '../interfaces/IRead';
import IWrite from '../interfaces/IWrite';
import IModel from '../../model/interfaces/IModel';
import * as mongoose from 'mongoose';

class BaseRepository<Model extends IModel> implements IRead<Model>, IWrite<Model> {

    private _model: mongoose.Model<Model>;

    constructor(mongooseModel: mongoose.Model<Model>) {
        this._model = mongooseModel
    }

    get model() {
        return this._model;
    }

    getAll(): mongoose.Promise<Array<Model>> {
        return this.model.find({}).exec();
    }

    findByID(_id: string): mongoose.Promise<Model> {
        return this.model.findById({_id: BaseRepository.toObjectId(_id)}).exec();
    }

    create(item: Model): mongoose.Promise<Model> {
        return this.model.create(item);
    }

    update(_id: string, item: Model): mongoose.Promise<Object> {
        return this.model.update({_id: BaseRepository.toObjectId(_id)}, item).exec();
    }

    patch(_id: string, item: Model): mongoose.Promise<Object> {
        // mongoose never replaces the whole model
        return this.model.update({_id: BaseRepository.toObjectId(_id)}, item).exec();
    }

    remove(_id: string): mongoose.Promise<any> {
        return this.model.remove({_id: BaseRepository.toObjectId(_id)}).exec();
    }

    private static toObjectId(_id: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }
}

export default BaseRepository;