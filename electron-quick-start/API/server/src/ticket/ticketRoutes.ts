import { Router } from 'express';
import ticketController from './ticketController';

class TicketRoutes{

  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
   
    this.router.get('/', ticketController.ticketIndex);
    this.router.post('/', ticketController.createticket);
  }
}

const ticketRoutes = new TicketRoutes();
export default ticketRoutes.router;