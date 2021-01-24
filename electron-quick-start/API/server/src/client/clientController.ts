import { Response, Request } from 'express';
import POOL from '../database';

class ClientController{
  constructor() {
    
  }

  public async clientList(req: Request, res: Response): Promise<void> {
    const CLIENTS = await POOL.query('SELECT * FROM cliente');
    console.log(CLIENTS);
    res.json(CLIENTS);
  }

  public async getClientById(req: Request, res: Response): Promise<any> {
    /*Destructuring assignment: allows you to assign the 
    properties of an array or object to variables using syntax that looks similar 
    to array or object literals*/
    const { rut_cliente } = req.params;
    const CLIENT = await POOL.query("SELECT * FROM cliente WHERE rut_cliente = ?", [rut_cliente])
    console.log(CLIENT);
    if (CLIENT.length > 0) {
      return res.json(CLIENT[0]);
    }
    res.status(404).json({ text: "The client doesn't exist" })
  }

  public async createClient(req: Request, res: Response): Promise<void> {
    await POOL.query('INSERT INTO cliente SET ?', [req.body]);
    res.json({ message: 'client saved' });
  }

  public async updateClient(req: Request, res: Response): Promise<void> {
    const { rut_cliente } = req.params;
    await POOL.query('UPDATE cliente SET ? WHERE rut_cliente = ?', [req.body, rut_cliente]);
    res.json({ message: 'Client updated' });
  }

  public async deleteClient(req: Request, res: Response): Promise<void> {
    const { rut_cliente } = req.params;
    await POOL.query('DELETE FROM cliente WHERE rut_cliente = ?', [rut_cliente]);
    res.json({ message: 'Client droped' });
  }
}

const clientController = new ClientController();
export default clientController;