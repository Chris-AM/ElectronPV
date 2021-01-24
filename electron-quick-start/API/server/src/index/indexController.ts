import { Request, Response } from 'express';

 class IndexController {

  constructor() {
  }

  public index(req: Request, res: Response) {
    res.json(
      [
        { text: 'The API are in /api' },
        { text: 'products: /product' },
        { text: 'clients: /client' },
        { text: 'store: /store' },
        { text: 'Closes: /close' },
        { text: 'Sells: /sell' },
        { text: 'Tickets: /ticket' }
      ]
    )
  }
}

export const iController = new IndexController();