import { Router } from 'express';
import storeController from './storeController';

class StoreRoutes{

  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get('/', storeController.storeIndex);
    this.router.post('/', storeController.createStore);
  }
}

const storeRoutes = new StoreRoutes();
export default storeRoutes.router;