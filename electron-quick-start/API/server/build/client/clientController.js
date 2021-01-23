"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ClientController {
    constructor() {
    }
    clientIndex(req, res) {
        database_1.default.query('DESCRIBE cliente');
        res.json({ text: 'this is the client table' });
    }
    createClient(req, res) {
        res.json({ text: 'Creating a client' });
    }
}
const clientController = new ClientController();
exports.default = clientController;
