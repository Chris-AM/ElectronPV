import { Router } from 'express';
import sellsPointController from '../controllers/sellsPointController'
class SqlRoutes{

  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    //getMethod(expects 1 pameter at least)
    //send(property) Response<any, number>.send: Send<any, Response<any, number>>
    /*what i'm doing */
    this.router.get('/', sellsPointController.index
    )
  }
}

const sqlRoutes = new SqlRoutes();
export default sqlRoutes.router;