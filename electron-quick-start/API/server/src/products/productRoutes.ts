import { Router } from 'express';
import productController from './productController';

class ProductRoutes{

  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
   
    this.router.get('/', productController.productList);
    this.router.get('/:codigo_barras', productController.getProductByBC);
    this.router.post('/', productController.createProduct);
    this.router.put('/:codigo_barras', productController.updateProduct);
    this.router.delete('/:codigo_barras', productController.deleteProduct);
  }
}

const productRoutes = new ProductRoutes();
export default productRoutes.router;