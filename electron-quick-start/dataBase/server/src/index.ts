import expres, { Application } from 'express';

class Server{

  public app: Application;

  constructor() {
    this.app = expres();
    this.config();
    this.routes();
}

  config(): void {
    this.app.set('port', process.env.PORT || 3000);
  }

  routes(): void{

  }

  start(): void{
    this.app.listen(this.app.get('port'), () => {
      console.log(`server on port` , this.app.get('port'))
    });
  }

}

const SERVER = new Server();
SERVER.start();