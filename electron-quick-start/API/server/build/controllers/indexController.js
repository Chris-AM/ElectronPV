"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iController = void 0;
class IndexController {
    constructor() {
    }
    index(req, res) {
        res.json({ text: 'The API is in /api/store' });
    }
}
exports.iController = new IndexController();
