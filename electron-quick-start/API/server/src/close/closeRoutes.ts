import { Router } from 'express';
import closeController from "./closeController";

class CloseRoutes{

  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
   
    this.router.get('/', closeController.closeIndex);
    this.router.post('/', closeController.createClose);
  }
}

const closeRoutes = new CloseRoutes();
export default closeRoutes.router;