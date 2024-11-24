import { Request, Response } from 'express';
import { db } from '../db/db';
import { ParamType } from './some';

export const findVideoController = (req: Request<ParamType>, res: Response<any /*OutputVideoType[]*/>) => {
  const id = +req.params.id;

  const video = db.videos.find(video => video.id === id);

  if (!video) {
    res.sendStatus(404);
  }

  res
    .status(200)
    .json(video);
};
