import { Router } from 'express';
import ticketController from './ticketController';

class TicketRoutes{

  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
   
    this.router.get('/', ticketController.ticketList);
    this.router.get('/:numero_folio', ticketController.getTicketByTN);
    this.router.post('/', ticketController.createTicket);
    this.router.put('/:numero_folio', ticketController.updateTicket);
    this.router.delete('/:numero_folio', ticketController.deleteTicket);
  }
}

const ticketRoutes = new TicketRoutes();
export default ticketRoutes.router;