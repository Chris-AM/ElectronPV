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
        //getMethod(expects 1 pameter at least)
        //send(property) Response<any, number>.send: Send<any, Response<any, number>>
        /*what i'm doing */
        this.router.get('/', productController_1.default.productIndex);
        this.router.get('/', productController_1.default.createProduct);
    }
}
const productRoutes = new ProductRoutes();
exports.default = productRoutes.router;
