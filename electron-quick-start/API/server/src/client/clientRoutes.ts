import { Router } from 'express';
import clientController from './clientController';

class ClientRoutes{

  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
   
    this.router.get('/', clientController.clientIndex);
    this.router.post('/', clientController.createClient);
  }
}

const clientRoutes = new ClientRoutes();
export default clientRoutes.router;