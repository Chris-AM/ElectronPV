import { Response, Request } from 'express';
import POOL from '../database';

class ClientController{
  constructor() {
    
  }

  public clientIndex(req: Request, res: Response) {
    POOL.query('DESCRIBE cliente');
    res.json({ text: 'this is the client table' });
  }

  public createClient(req: Request, res: Response) {
    res.json({ text: 'Creating a client' });
  }
}

const clientController = new ClientController();
export default clientController;