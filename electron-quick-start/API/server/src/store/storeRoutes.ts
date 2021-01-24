import { Router } from 'express';
import storeController from './storeController';

class StoreRoutes{

  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get('/', storeController.getStore);
    this.router.get('/:rut', storeController.getStoreByID);
    this.router.post('/', storeController.createStore);
    this.router.put('/:rut', storeController.updateStore);
    this.router.delete('/:rut', storeController.deleteStore);
  }
}

const storeRoutes = new StoreRoutes();
export default storeRoutes.router;