"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ticketController_1 = __importDefault(require("./ticketController"));
class TicketRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ticketController_1.default.ticketList);
        this.router.get('/:numero_folio', ticketController_1.default.getTicketByTN);
        this.router.post('/', ticketController_1.default.createTicket);
        this.router.put('/:numero_folio', ticketController_1.default.updateTicket);
        this.router.delete('/:numero_folio', ticketController_1.default.deleteTicket);
    }
}
const ticketRoutes = new TicketRoutes();
exports.default = ticketRoutes.router;
