import { Request, Response } from 'express';
import { db } from '../db/db';

export const deleteTestingController = (req: Request<any>, res: Response<any /*OutputVideoType[]*/>) => {
  db.videos = [];

  res
    .sendStatus(204);
};
