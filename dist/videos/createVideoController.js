"use strict";
// src/videos/createVideoController.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVideoController = void 0;
const db_1 = require("../db/db");
const video_types_1 = require("../input-output-types/video-types");
const inputValidation = (video) => {
    const errors = {
        errorsMessages: [],
    };
    if (video.availableResolutions && (!Array.isArray(video.availableResolutions)
        || video.availableResolutions.find(p => !video_types_1.Resolutions[p]))) {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'availableResolutions',
        });
    }
    if (!video.title) {
        errors.errorsMessages.push({
            message: 'title is required',
            field: 'title',
        });
    }
    else if (video.title.length > 40) {
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
    }
    else if (video.author.length > 20) {
        errors.errorsMessages.push({
            message: 'author max length is 40',
            field: 'author',
        });
    }
    return errors;
};
const createVideoController = (req, res) => {
    const errors = inputValidation(req.body);
    if (errors.errorsMessages.length) { // если есть ошибки - отправляем ошибки
        res
            .status(400)
            .json(errors);
        return;
    }
    const now = new Date();
    now.setTime(now.getTime()
    // + 2 * 24 * 60 * 60 * 1000
    );
    const nextDayDate = now.toISOString();
    const newVideo = Object.assign({ id: Date.now() + Math.random(), availableResolutions: [video_types_1.Resolutions.P144], createdAt: nextDayDate, publicationDate: nextDayDate, canBeDownloaded: false, minAgeRestriction: null }, req.body);
    db_1.db.videos = [...db_1.db.videos, newVideo];
    res
        .status(201)
        .json(newVideo);
};
exports.createVideoController = createVideoController;
