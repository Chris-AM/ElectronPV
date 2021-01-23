import { Response, Request } from 'express';
import POOL from '../database';

class SellController{
  constructor() {
    
  }

  public sellIndex(req: Request, res: Response) {
    POOL.query('DESCRIBE venta');
    res.json({ text: 'this is the sell table' });
  }

  public createSell(req: Request, res: Response) {
    res.json({ text: 'Creating a sell' });
  }
}

const sellController = new SellController();
export default sellController;