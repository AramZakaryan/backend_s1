import { Request, Response } from 'express';
import { db } from '../db/db';
import { ParamType } from './some';

export const deleteVideoController = (req: Request<ParamType>, res: Response<any /*OutputVideoType[]*/>) => {
  const id = +req.params.id;

  const video = db.videos.find(video => video.id === id);

  if (!video) {
    res.sendStatus(404);
  }

  db.videos = db.videos.filter(video => video.id !== id);

  res
    .sendStatus(204);
};
