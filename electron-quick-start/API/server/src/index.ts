import expres, { Application } from 'express';
import indexRoutes from './index/indexroutes';

import morgan from 'morgan';
import cors from 'cors';
import e from 'cors';

//tables routes
import productRoutes from './products/productRoutes';
import clientRoutes from './client/clientRoutes';
import closeRoutes from './close/closeRoutes';
import sellRoutes from './sell/sellRoutes';
import storeRoutes from './store/storeRoutes';
import ticketRoutes from './ticket/ticketRoutes'
class Server {

  public app: Application;

  constructor() {
    //here I execute al these methods
    this.app = expres();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.set('port', process.env.PORT || 3000);
    //Morgan is a HTTP request logger middleware for Node. js. It simplifies the process of logging requests to your application.
    //now I can see the petitions to the server
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(expres.json());
    //urlencoded: parses incoming requests with urlencoded payloads and is based on body-parser.
    this.app.use(expres.urlencoded({extended: false}))
  }

  routes(): void {
    this.app.use('/', indexRoutes);
    this.app.use('/api/product', productRoutes);
    this.app.use('/api/client', clientRoutes);
    this.app.use('/api/close', closeRoutes);
    this.app.use('/api/sell', sellRoutes);
    this.app.use('/api/store', storeRoutes);
    this.app.use('/api/ticket', ticketRoutes);    
  }

  start(): void {
    this.app.listen(this.app.get('port'), () => {
      console.log(`server on port`, this.app.get('port'))
    });
  }

}

const SERVER = new Server();
SERVER.start();