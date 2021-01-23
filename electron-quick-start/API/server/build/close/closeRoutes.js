"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const closeController_1 = __importDefault(require("./closeController"));
class CloseRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', closeController_1.default.closeIndex);
        this.router.post('/', closeController_1.default.createClose);
    }
}
const closeRoutes = new CloseRoutes();
exports.default = closeRoutes.router;
