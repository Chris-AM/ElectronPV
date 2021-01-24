import { Router } from 'express';
import clientController from './clientController';

class ClientRoutes{

  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
   
    this.router.get('/', clientController.clientList);
    this.router.get('/:rut_cliente', clientController.getClientById);
    this.router.post('/', clientController.createClient);
    this.router.put('/:rut_cliente', clientController.updateClient);
    this.router.delete('/:rut_cliente', clientController.deleteClient);
  }
}

const clientRoutes = new ClientRoutes();
export default clientRoutes.router;