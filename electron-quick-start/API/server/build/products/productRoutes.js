"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("./productController"));
class ProductRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', productController_1.default.productList);
        this.router.get('/:codigo_barras', productController_1.default.getProductByBC);
        this.router.post('/', productController_1.default.createProduct);
        this.router.put('/:codigo_barras', productController_1.default.updateProduct);
        this.router.delete('/:codigo_barras', productController_1.default.deleteProduct);
    }
}
const productRoutes = new ProductRoutes();
exports.default = productRoutes.router;
