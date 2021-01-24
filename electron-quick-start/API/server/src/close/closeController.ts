import { Response, Request } from 'express';
import POOL from '../database';

class CloseController{
  constructor() {
    
  }

  public async closesList(req: Request, res: Response): Promise<void> {
    const CLOSES = await POOL.query('SELECT * FROM cierre');
    res.json(CLOSES);
  }

  public async getCloseById(req: Request, res: Response): Promise<any> {
    const { id_cierre } = req.params;
    const CLOSE = await POOL.query("SELECT * FROM cierre WHERE id_cierre = ?", [id_cierre])
    console.log(CLOSE);
    if (CLOSE.length > 0) {
      return res.json(CLOSE[0]);
    }
    res.status(404).json({ text: "The ticket doesn't exist" })
  }

  public async createClose(req: Request, res: Response): Promise<void> {
    await POOL.query('INSERT INTO cierre SET ?', [req.body]);
    res.json({ message: 'close saved' });
  }

}

const closeController = new CloseController();
export default closeController;