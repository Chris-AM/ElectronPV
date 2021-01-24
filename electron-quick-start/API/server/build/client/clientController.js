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
class ClientController {
    constructor() {
    }
    clientList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const CLIENTS = yield database_1.default.query('SELECT * FROM cliente');
            console.log(CLIENTS);
            res.json(CLIENTS);
        });
    }
    getClientById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /*Destructuring assignment: allows you to assign the
            properties of an array or object to variables using syntax that looks similar
            to array or object literals*/
            const { rut_cliente } = req.params;
            const CLIENT = yield database_1.default.query("SELECT * FROM cliente WHERE rut_cliente = ?", [rut_cliente]);
            console.log(CLIENT);
            if (CLIENT.length > 0) {
                return res.json(CLIENT[0]);
            }
            res.status(404).json({ text: "The client doesn't exist" });
        });
    }
    createClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO cliente SET ?', [req.body]);
            res.json({ message: 'client saved' });
        });
    }
    updateClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { rut_cliente } = req.params;
            yield database_1.default.query('UPDATE cliente SET ? WHERE rut_cliente = ?', [req.body, rut_cliente]);
            res.json({ message: 'Client updated' });
        });
    }
    deleteClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { rut_cliente } = req.params;
            yield database_1.default.query('DELETE FROM cliente WHERE rut_cliente = ?', [rut_cliente]);
            res.json({ message: 'Client droped' });
        });
    }
}
const clientController = new ClientController();
exports.default = clientController;
