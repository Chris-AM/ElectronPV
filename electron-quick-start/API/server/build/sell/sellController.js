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
class SellController {
    constructor() {
    }
    sellsList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const SELLS = yield database_1.default.query('SELECT * FROM venta');
            res.json(SELLS);
        });
    }
    getSellById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idventa } = req.params;
            const SELL = yield database_1.default.query("SELECT * FROM venta WHERE idventa = ?", [idventa]);
            console.log(SELL);
            if (SELL.length > 0) {
                return res.json(SELL[0]);
            }
            res.status(404).json({ text: "The Sell doesn't exist" });
        });
    }
    createSell(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO venta SET ?', [req.body]);
            res.json({ message: 'Sell saved' });
        });
    }
    updateSell(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idventa } = req.params;
            yield database_1.default.query('UPDATE venta SET ? WHERE idventa = ?', [req.body, idventa]);
            res.json({ message: 'Sell updated' });
        });
    }
    deleteSell(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idventa } = req.params;
            yield database_1.default.query('DELETE FROM venta WHERE idventa = ?', [idventa]);
            res.json({ message: 'Sell droped' });
        });
    }
}
const sellController = new SellController();
exports.default = sellController;
