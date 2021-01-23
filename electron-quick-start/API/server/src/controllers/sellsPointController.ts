import { Request, Response } from 'express';

export class SellsPointController {

  constructor() {
  }

  public index(req: Request, res: Response) {
    res.send(
      'testing'
    )
  }
}