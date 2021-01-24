"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientController_1 = __importDefault(require("./clientController"));
class ClientRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', clientController_1.default.clientList);
        this.router.get('/:rut_cliente', clientController_1.default.getClientById);
        this.router.post('/', clientController_1.default.createClient);
        this.router.put('/:rut_cliente', clientController_1.default.updateClient);
        this.router.delete('/:rut_cliente', clientController_1.default.deleteClient);
    }
}
const clientRoutes = new ClientRoutes();
exports.default = clientRoutes.router;
