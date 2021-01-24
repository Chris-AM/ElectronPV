"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProductController {
    constructor() {
    }
    productList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const PRODUCTS = yield database_1.default.query('SELECT * FROM producto');
            res.json(PRODUCTS);
        });
    }
    getProductByBC(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /*Destructuring assignment: allows you to assign the
            properties of an array or object to variables using syntax that looks similar
            to array or object literals*/
            const { codigo_barras } = req.params;
            const PRODUCT = yield database_1.default.query("SELECT * FROM producto WHERE codigo_barras = ?", [codigo_barras]);
            console.log(PRODUCT);
            if (PRODUCT.length > 0) {
                return res.json(PRODUCT[0]);
            }
            res.status(404).json({ text: "The product doesn't exist" });
        });
    }
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO producto SET ?', [req.body]);
            res.json({ message: 'product saved' });
        });
    }
    updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo_barras } = req.params;
            yield database_1.default.query('UPDATE producto SET ? WHERE codigo_barras = ?', [req.body, codigo_barras]);
            res.json({ message: 'Product updated' });
        });
    }
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo_barras } = req.params;
            yield database_1.default.query('DELETE FROM producto WHERE codigo_barras = ?', [codigo_barras]);
            res.json({ message: 'Product droped' });
        });
    }
}
const productController = new ProductController();
exports.default = productController;
