import { Request, Response } from 'express';

 class IndexController {

  constructor() {
  }

  public index(req: Request, res: Response) {
    res.json(
     { text: 'The API is in /api/store'}
    )
  }
}

export const iController = new IndexController();