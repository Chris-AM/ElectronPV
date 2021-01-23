import { Router } from 'express';
import { iController } from './indexController';


class IndexRoutes {

  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    //getMethod(expects 1 pameter at least)
    //send(property) Response<any, number>.send: Send<any, Response<any, number>>
    /*what i'm doing */
    this.router.get('/', iController.index)
  }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
