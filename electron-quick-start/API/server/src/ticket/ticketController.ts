import { Response, Request } from 'express';
import POOL from '../database';

class TicketController{
  constructor() {
    
  }

  public ticketIndex(req: Request, res: Response) {
    POOL.query('DESCRIBE boleta');
    res.json({ text: 'this is the ticket table' });
  }

  public createticket(req: Request, res: Response) {
    res.json({ text: 'Creating a new ticket' });
  }
}

const ticketController = new TicketController();
export default ticketController;