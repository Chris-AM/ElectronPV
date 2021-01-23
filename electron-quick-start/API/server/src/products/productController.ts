import { Response, Request } from 'express';
import POOL from '../database';

class ProductController{
  constructor() {
    
  }

  public productIndex(req: Request, res: Response) {
    POOL.query('DESCRIBE producto');
    res.json({ text: 'this is the product table' });
  }

  public createProduct(req: Request, res: Response) {
    res.json({ text: 'Creating a product' });
  }
}

const productController = new ProductController();
export default productController;