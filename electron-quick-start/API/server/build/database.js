"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const keys_1 = __importDefault(require("./keys"));
//createPool expects a config argument
const POOL = mysql_1.default.createPool(keys_1.default.database);
POOL.getConnection((err, connection) => {
    if (err)
        throw err;
    connection.release();
    console.info('DB is connected');
});
exports.default = POOL;
