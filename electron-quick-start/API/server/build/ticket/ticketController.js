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
class TicketController {
    constructor() {
    }
    ticketList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const TICKETS = yield database_1.default.query('SELECT * FROM boleta');
            res.json(TICKETS);
        });
    }
    getTicketByTN(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { numero_folio } = req.params;
            const TICKET = yield database_1.default.query("SELECT * FROM boleta WHERE numero_folio = ?", [numero_folio]);
            console.log(TICKET);
            if (TICKET.length > 0) {
                return res.json(TICKET[0]);
            }
            res.status(404).json({ text: "The ticket doesn't exist" });
        });
    }
    createTicket(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO boleta SET ?', [req.body]);
            res.json({ message: 'ticket saved' });
        });
    }
    updateTicket(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { numero_folio } = req.params;
            yield database_1.default.query('UPDATE boleta SET ? WHERE numero_folio = ?', [req.body, numero_folio]);
            res.json({ message: 'ticket updated' });
        });
    }
    deleteTicket(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { numero_folio } = req.params;
            yield database_1.default.query('DELETE FROM boleta WHERE numero_folio = ?', [numero_folio]);
            res.json({ message: 'ticket droped' });
        });
    }
}
const ticketController = new TicketController();
exports.default = ticketController;
