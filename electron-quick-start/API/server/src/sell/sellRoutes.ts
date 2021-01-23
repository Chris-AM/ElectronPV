import { Router } from 'express';
import sellController from './sellController';

class SellRoutes{

  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
   
    this.router.get('/', sellController.sellIndex);
    this.router.post('/', sellController.createSell);
  }
}

const sellRoutes = new SellRoutes();
export default sellRoutes.router;