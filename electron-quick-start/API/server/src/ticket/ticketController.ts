import { Response, Request } from 'express';
import POOL from '../database';

class TicketController{
  constructor() {
    
  }

  public async ticketList(req: Request, res: Response): Promise<void> {
    const TICKETS = await POOL.query('SELECT * FROM boleta');
    res.json(TICKETS);
  }

  public async getTicketByTN(req: Request, res: Response): Promise<any> {
    const { numero_folio } = req.params;
    const TICKET = await POOL.query("SELECT * FROM boleta WHERE numero_folio = ?", [numero_folio])
    console.log(TICKET);
    if (TICKET.length > 0) {
      return res.json(TICKET[0]);
    }
    res.status(404).json({ text: "The ticket doesn't exist" })
  }

  public async createTicket(req: Request, res: Response): Promise<void> {
    await POOL.query('INSERT INTO boleta SET ?', [req.body]);
    res.json({ message: 'ticket saved' });
  }

  public async updateTicket(req: Request, res: Response): Promise<void> {
    const { numero_folio } = req.params;
    await POOL.query('UPDATE boleta SET ? WHERE numero_folio = ?', [req.body, numero_folio]);
    res.json({ message: 'ticket updated' });
  }

  public async deleteTicket(req: Request, res: Response): Promise<void> {
    const { numero_folio } = req.params;
    await POOL.query('DELETE FROM boleta WHERE numero_folio = ?', [numero_folio]);
    res.json({ message: 'ticket droped' });
  }
}

const ticketController = new TicketController();
export default ticketController;