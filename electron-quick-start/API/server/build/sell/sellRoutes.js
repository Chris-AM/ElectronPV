"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sellController_1 = __importDefault(require("./sellController"));
class SellRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', sellController_1.default.sellIndex);
        this.router.post('/', sellController_1.default.createSell);
    }
}
const sellRoutes = new SellRoutes();
exports.default = sellRoutes.router;
