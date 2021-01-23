"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class TicketController {
    constructor() {
    }
    ticketIndex(req, res) {
        database_1.default.query('DESCRIBE boleta');
        res.json({ text: 'this is the ticket table' });
    }
    createticket(req, res) {
        res.json({ text: 'Creating a new ticket' });
    }
}
const ticketController = new TicketController();
exports.default = ticketController;
