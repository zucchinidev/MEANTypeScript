
interface IWrite<Model> {
    create: (item: Model) => Promise<Model>;
    update: (_id: string, item: Model) => Promise<Object>;
    remove: (_id: string) => Promise<any>;
}

export default IWrite;