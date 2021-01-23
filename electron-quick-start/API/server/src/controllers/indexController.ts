import { Request, Response } from 'express';

 class IndexController {

  constructor() {
  }

  public index(req: Request, res: Response) {
    res.send(
      'testing'
    )
  }
}

export const iController = new IndexController();