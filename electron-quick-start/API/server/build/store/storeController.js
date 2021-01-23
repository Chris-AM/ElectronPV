"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class StoreController {
    constructor() {
    }
    storeIndex(req, res) {
        database_1.default.query('DESCRIBE negocio');
        res.json({ text: 'this is the store table' });
    }
    createStore(req, res) {
        res.json({ text: 'Creating this store' });
    }
}
const storeController = new StoreController();
exports.default = storeController;
