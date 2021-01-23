"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexroutes_1 = __importDefault(require("./index/indexroutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//tables routes
const productRoutes_1 = __importDefault(require("./products/productRoutes"));
class Server {
    constructor() {
        //here I execute al these methods
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        //Morgan is a HTTP request logger middleware for Node. js. It simplifies the process of logging requests to your application.
        //now I can see the petitions to the server
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        //urlencoded: parses incoming requests with urlencoded payloads and is based on body-parser.
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexroutes_1.default);
        this.app.use('/api/product', productRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`server on port`, this.app.get('port'));
        });
    }
}
const SERVER = new Server();
SERVER.start();
