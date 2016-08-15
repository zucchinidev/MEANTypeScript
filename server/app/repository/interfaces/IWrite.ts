import * as mongoose from 'mongoose';

interface IWrite<Model> {
    create: (item: Model) => mongoose.Promise<Model>;
    update: (_id: string, item: Model) => mongoose.Promise<Model>;
    remove: (_id: string) => mongoose.Promise<any>;
}

export default IWrite;
