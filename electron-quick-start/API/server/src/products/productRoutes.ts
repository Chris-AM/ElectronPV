import { Router } from 'express';
import productController from './productController';

class ProductRoutes{

  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    //getMethod(expects 1 pameter at least)
    //send(property) Response<any, number>.send: Send<any, Response<any, number>>
    /*what i'm doing */
    this.router.get('/', productController.productIndex);
    this.router.get('/', productController.createProduct);
  }
}

const productRoutes = new ProductRoutes();
export default productRoutes.router;