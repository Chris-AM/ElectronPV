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
class StoreController {
    constructor() {
    }
    getStore(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const STORE = yield database_1.default.query('SELECT * FROM negocio');
            res.json(STORE);
        });
    }
    getStoreByID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /*Destructuring assignment: allows you to assign the
            properties of an array or object to variables using syntax that looks similar
            to array or object literals*/
            const { rut } = req.params;
            const STORE = yield database_1.default.query("SELECT * FROM negocio WHERE rut = ?", [rut]);
            console.log(STORE);
            if (STORE.length > 0) {
                return res.json(STORE[0]);
            }
            res.status(404).json({ text: "This is not your store ID" });
        });
    }
    createStore(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO negocio SET ?', [req.body]);
            res.json({ message: 'Store saved' });
        });
    }
    updateStore(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { rut } = req.params;
            yield database_1.default.query('UPDATE negocio SET ? WHERE rut = ?', [req.body, rut]);
            res.json({ message: 'Store updated' });
        });
    }
    deleteStore(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { rut } = req.params;
            yield database_1.default.query('DELETE FROM negocio WHERE rut = ?', [rut]);
            res.json({ message: 'Store droped' });
        });
    }
}
const storeController = new StoreController();
exports.default = storeController;
