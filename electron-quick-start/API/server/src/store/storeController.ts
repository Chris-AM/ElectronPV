import { Response, Request } from 'express';
import POOL from '../database';

class StoreController{
  constructor() {
    
  }

  public async getStore(req: Request, res: Response): Promise<void> {
    const STORE = await POOL.query('SELECT * FROM negocio');
    res.json(STORE);
  }

  public async getStoreByID(req: Request, res: Response): Promise<any> {
    /*Destructuring assignment: allows you to assign the 
    properties of an array or object to variables using syntax that looks similar 
    to array or object literals*/
    const { rut } = req.params;
    const STORE = await POOL.query("SELECT * FROM negocio WHERE rut = ?", [rut])
    console.log(STORE);
    if (STORE.length > 0) {
      return res.json(STORE[0]);
    }
    res.status(404).json({ text: "This is not your store ID" })
  }

  public async createStore(req: Request, res: Response): Promise<void> {
    await POOL.query('INSERT INTO negocio SET ?', [req.body]);
    res.json({ message: 'Store saved' });
  }

  public async updateStore(req: Request, res: Response): Promise<void> {
    const { rut } = req.params;
    await POOL.query('UPDATE negocio SET ? WHERE rut = ?', [req.body, rut]);
    res.json({ message: 'Store updated' });
  }

  public async deleteStore(req: Request, res: Response): Promise<void> {
    const { rut } = req.params;
    await POOL.query('DELETE FROM negocio WHERE rut = ?', [rut]);
    res.json({ message: 'Store droped' });
  }
}

const storeController = new StoreController();
export default storeController;