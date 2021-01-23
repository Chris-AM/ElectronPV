import { Request, Response } from 'express';
import POOL from '../database';


 class SellsPointController {

  constructor() {
  }
   public index(req: Request, res: Response) {
     POOL.query('DESCRIBE producto');
     res.json('SellsPoint')
  }
}
const sellsPointController = new SellsPointController();
export default sellsPointController;