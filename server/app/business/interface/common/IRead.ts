

interface IRead<Model> {
    getAll: () => Promise<Array<Model>>;
    findByID: (id: string) => Promise<Model>;
}

export default IRead;