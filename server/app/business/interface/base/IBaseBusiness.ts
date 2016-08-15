import IRead from '../common/IRead';
import IWrite from '../common/IWrite';
import BaseRepository from '../../../repository/base/BaseRepository';
import IModel from '../../../model/interfaces/IModel';

interface IBaseBusiness<T> extends IRead<T>, IWrite<T> {
    repository: BaseRepository<IModel>
}

export default IBaseBusiness;