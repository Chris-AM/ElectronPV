import { Router } from 'express';
import sellController from './sellController';

class SellRoutes{

  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
   
    this.router.get('/', sellController.sellsList);
    this.router.get('/:idventa', sellController.getSellById);
    this.router.post('/', sellController.createSell);
    this.router.put('/:idventa', sellController.updateSell);
    this.router.delete('/:idventa', sellController.deleteSell);
  }
}

const sellRoutes = new SellRoutes();
export default sellRoutes.router;