"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iController = void 0;
class IndexController {
    constructor() {
    }
    index(req, res) {
        res.send('testing');
    }
}
exports.iController = new IndexController();
