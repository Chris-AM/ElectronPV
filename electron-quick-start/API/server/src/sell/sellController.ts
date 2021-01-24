import { Response, Request } from 'express';
import POOL from '../database';

class SellController{
  constructor() {
    
  }

  public async sellsList(req: Request, res: Response): Promise<void> {
    const SELLS = await POOL.query('SELECT * FROM venta');
    res.json(SELLS);
  }

  public async getSellById(req: Request, res: Response): Promise<any> {
    const { idventa } = req.params;
    const SELL = await POOL.query("SELECT * FROM venta WHERE idventa = ?", [idventa])
    console.log(SELL);
    if (SELL.length > 0) {
      return res.json(SELL[0]);
    }
    res.status(404).json({ text: "The Sell doesn't exist" })
  }

  public async createSell(req: Request, res: Response): Promise<void> {
    await POOL.query('INSERT INTO venta SET ?', [req.body]);
    res.json({ message: 'Sell saved' });
  }

  public async updateSell(req: Request, res: Response): Promise<void> {
    const { idventa } = req.params;
    await POOL.query('UPDATE venta SET ? WHERE idventa = ?', [req.body, idventa]);
    res.json({ message: 'Sell updated' });
  }

  public async deleteSell(req: Request, res: Response): Promise<void> {
    const { idventa } = req.params;
    await POOL.query('DELETE FROM venta WHERE idventa = ?', [idventa]);
    res.json({ message: 'Sell droped' });
  }
}

const sellController = new SellController();
export default sellController;