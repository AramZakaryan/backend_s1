// src/videos/createVideoController.ts

import { Response, Request } from 'express';
import { OutputErrorsType } from '../input-output-types/input-output-types';
import { db } from '../db/db';
import { InputVideoType, OutputVideoType, Resolutions } from '../input-output-types/video-types';
import { VideoDBType } from '../db/video-db-type';

const inputValidation = (video: InputVideoType) => {
    const errors: OutputErrorsType = { // объект для сбора ошибок
      errorsMessages: [],
    };
    if (video.availableResolutions && (!Array.isArray(video.availableResolutions)
      || video.availableResolutions.find(p => !Resolutions[p]))
    ) {
      errors.errorsMessages.push({
        message: 'error!!!!', field: 'availableResolutions',
      });
    }

    if (!video.title) {
      errors.errorsMessages.push({
        message: 'title is required',
        field: 'title',
      });
    } else if (video.title.length > 40) {
      errors.errorsMessages.push({
        message: 'title max length is 40',
        field: 'title',
      });
    }


    if (!video.author) {
      errors.errorsMessages.push({
        message: 'author is required',
        field: 'author',
      });
    } else if (video.author.length > 20) {
      errors.errorsMessages.push({
        message: 'author max length is 40',
        field: 'author',
      });
    }

    return errors;
  }
;

export const createVideoController = (req: Request<any, any, InputVideoType>, res: Response<OutputVideoType | OutputErrorsType>) => {
  const errors = inputValidation(req.body);
  if (errors.errorsMessages.length) { // если есть ошибки - отправляем ошибки
    res
      .status(400)
      .json(errors);
    return;
  }

  const now = new Date();
  const createdAtDate = now.toISOString();
  now.setDate(now.getDate() + 1);
  const nextDayDate = now.toISOString();


  const newVideo: VideoDBType = {

    id: Date.now() + Math.random(),
    availableResolutions: [Resolutions.P144],
    createdAt: createdAtDate,
    publicationDate: nextDayDate,
    canBeDownloaded: false,
    minAgeRestriction: null,
    ...req.body,
  };
  db.videos = [...db.videos, newVideo];

  res
    .status(201)
    .json(newVideo);
};