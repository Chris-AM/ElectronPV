"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class SqlRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //getMethod(expects 1 pameter at least)
        //send(property) Response<any, number>.send: Send<any, Response<any, number>>
        /*what i'm doing */
        this.router.get('/', (req, res) => res.send('electron PV'));
    }
}
const sqlRoutes = new SqlRoutes();
exports.default = sqlRoutes.router;
