import { Response, Request } from 'express';
import POOL from '../database';

class CloseController{
  constructor() {
    
  }

  public closeIndex(req: Request, res: Response) {
    POOL.query('DESCRIBE cierre');
    res.json({ text: 'this is the close table' });
  }

  public createClose(req: Request, res: Response) {
    res.json({ text: 'Creating a day closure' });
  }
}

const closeController = new CloseController();
export default closeController;