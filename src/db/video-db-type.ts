import { Resolutions } from '../input-output-types/video-types';

export type VideoDBType = {
  id: number
  title: string // maxLength: 40
  author: string // maxLength: 20
  availableResolutions: Resolutions[]
  canBeDownloaded: boolean
  minAgeRestriction: number | null// minimum: 1 maximum: 18
  createdAt: string
  publicationDate: string
}