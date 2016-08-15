import * as express from 'express';
import EmployeeRoutes from '../EmployeeRoutes';

let app = express();
class BaseRoutes {

    static routes(): express.Express {
        const employeeRoutes = new EmployeeRoutes();
        app.use("/", employeeRoutes.getRoutes());
        return app;
    }
}

Object.seal(BaseRoutes);
export default BaseRoutes;
