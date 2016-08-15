import * as mongoose from 'mongoose';

interface IRead<Model> {
    getAll: () => mongoose.Promise<Array<Model>>;
    findByID: (id: string) => mongoose.Promise<Model>;
}

export default IRead;
