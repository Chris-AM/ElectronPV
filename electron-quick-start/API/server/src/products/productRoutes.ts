import { Router } from 'express';
import productController from './productController';

class ProductRoutes{

  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
   
    this.router.get('/', productController.productIndex);
    this.router.post('/', productController.createProduct);
  }
}

const productRoutes = new ProductRoutes();
export default productRoutes.router;