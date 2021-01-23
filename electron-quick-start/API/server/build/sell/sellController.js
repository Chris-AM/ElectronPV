"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class SellController {
    constructor() {
    }
    sellIndex(req, res) {
        database_1.default.query('DESCRIBE venta');
        res.json({ text: 'this is the sell table' });
    }
    createSell(req, res) {
        res.json({ text: 'Creating a sell' });
    }
}
const sellController = new SellController();
exports.default = sellController;
