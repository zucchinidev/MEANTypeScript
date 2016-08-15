import Middelwares from './libs/middelwares/base/Middlewares';
import * as express from 'express';

const port = process.env.port || 8080;
let app: express.Express = express();

export default function init() {
   app.use(express.static('public'));
   app.use(Middelwares.defaultConfiguration());
   app.listen(port, () => {
      console.log(`NodeJS & Typescript listen port 8080`);
   });
}
