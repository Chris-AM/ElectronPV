import { Router } from 'express';

class IndexRoutes{

  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    //getMethod(expects 1 pameter at least)
    //send(property) Response<any, number>.send: Send<any, Response<any, number>>
    /*what i'm doing */
    this.router.get('/', (req, res) => res.send(
      'testing'
    ))
  }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
