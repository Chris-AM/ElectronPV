import { Response, Request } from 'express';
import POOL from '../database';

class StoreController{
  constructor() {
    
  }

  public storeIndex(req: Request, res: Response) {
    POOL.query('DESCRIBE negocio');
    res.json({ text: 'this is the store table' });
  }

  public createStore(req: Request, res: Response) {
    res.json({ text: 'Creating this store' });
  }
}

const storeController = new StoreController();
export default storeController;