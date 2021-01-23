"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iController = void 0;
class IndexController {
    constructor() {
    }
    index(req, res) {
        res.json([
            { text: 'The API are in /api' },
            { text: 'products: /product' },
            { text: 'clients: /client' },
            { text: 'store: /store' },
            { text: 'Closes: /close' },
            { text: 'Sells: /sell' },
            { text: 'Tickets: /ticket' }
        ]);
    }
}
exports.iController = new IndexController();
