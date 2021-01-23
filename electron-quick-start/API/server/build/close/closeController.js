"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class CloseController {
    constructor() {
    }
    closeIndex(req, res) {
        database_1.default.query('DESCRIBE cierre');
        res.json({ text: 'this is the close table' });
    }
    createClose(req, res) {
        res.json({ text: 'Creating a day closure' });
    }
}
const closeController = new CloseController();
exports.default = closeController;
