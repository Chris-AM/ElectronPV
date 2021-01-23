import { Response, Request, json } from 'express';
import POOL from '../database';

class ProductController{
  constructor() {
    
  }

  public async productList(req: Request, res: Response): Promise<void> {
    const PRODUCTS = await POOL.query('SELECT * FROM producto',
      function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });
  }

  public async getProductByBC(req: Request, res: Response): Promise<any> {
    /*Destructuring assignment: allows you to assign the 
    properties of an array or object to variables using syntax that looks similar 
    to array or object literals*/
    const { codigo_barras } = req.params;
    const PRODUCT = await POOL.query('SELECT * FROM producto WHERE codigo_barras = ?',
      [codigo_barras],
      function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });
    res.status(404).json({text:"The product doesn't exist"})
  }

  public async createProduct(req: Request, res: Response): Promise<void> {
   await POOL.query('INSERT INTO producto SET ?', [req.body]);
    res.json({ message: 'product saved' }); 
    
  }

  public async updateProduct(req: Request, res: Response): Promise<void> {
    const { codigo_barras } = req.params;
    await POOL.query('UPDATE producto SET ? WHERE codigo_barras = ?', [req.body, codigo_barras]);
    res.json({ message: 'Product updated' });
  }

  public async deleteProduct(req: Request, res: Response): Promise<void> {
    const { codigo_barras } = req.params;
    await POOL.query('DELETE FROM producto WHERE codigo_barras = ?', [codigo_barras]);
    res.json({ message: 'Product droped' });
  }

}

const productController = new ProductController();
export default productController;