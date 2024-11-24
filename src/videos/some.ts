// src/videos/some.ts

import { Request, Response } from 'express';
import { Resolutions } from '../input-output-types/video-types';

export type ParamType = {
  id: string
}

export type BodyType = {
  id?: number
  title: string // maxLength: 40
  author: string // maxLength: 20
  availableResolutions?: Resolutions[]
  canBeDownloaded?: boolean
  minAgeRestriction?: number // minimum: 1 maximum: 18
  createdAt?: string
  publicationDate?: string
}

export type QueryType = {
  search?: string
}

export type OutputType = void /*| OutputErrorsType | OutputVideoType*/

export const someController = (
  req: Request<ParamType, OutputType, BodyType, QueryType>,
  res: Response<OutputType>,
) => {

};