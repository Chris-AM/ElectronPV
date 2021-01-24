"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class SQLController {
    constructor() {
    }
    index(req, res) {
        database_1.default.query('DESCRIBE producto');
        res.json('SellsPoint');
    }
    //methods to be consumed in sqlRoutes
    //create methods
    createProduct(req, res) {
        res.json({ text: 'Creating a product' });
    }
    createClient(req, res) {
        res.json({ text: 'Creating a Client' });
    }
    createTicket(req, res) {
        res.json({ text: 'Creating a Ticket' });
    }
    createClose(req, res) {
        res.json({ text: 'Creating a Close' });
    }
    createSell(req, res) {
        res.json({ text: 'Creating a Sell' });
    }
    createStore(req, res) {
        res.json({ text: 'Creating a Store' });
    }
}
const sqlController = new SQLController();
exports.default = sqlController;
