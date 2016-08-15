import IBaseBusiness from '../../../business/interface/base/IBaseBusiness';
import IWriteController from '../common/IWriteController';
import IReadController from '../common/IReadController';

interface IBaseController<BusinessObject extends IBaseBusiness<Object>>
extends IReadController, IWriteController {}

export default IBaseController;