"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProductController {
    constructor() {
    }
    productIndex(req, res) {
        database_1.default.query('DESCRIBE producto');
        res.json({ text: 'this is the product table' });
    }
    createProduct(req, res) {
        res.json({ text: 'Creating a product' });
    }
}
const productController = new ProductController();
exports.default = productController;
