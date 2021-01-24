"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const storeController_1 = __importDefault(require("./storeController"));
class StoreRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', storeController_1.default.getStore);
        this.router.get('/:rut', storeController_1.default.getStoreByID);
        this.router.post('/', storeController_1.default.createStore);
        this.router.put('/:rut', storeController_1.default.updateStore);
        this.router.delete('/:rut', storeController_1.default.deleteStore);
    }
}
const storeRoutes = new StoreRoutes();
exports.default = storeRoutes.router;
