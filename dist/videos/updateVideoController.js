"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVideoController = void 0;
const db_1 = require("../db/db");
const inputValidation = (video) => {
    const errors = {
        errorsMessages: [],
    };
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
    if (video.canBeDownloaded && typeof video.canBeDownloaded !== 'boolean') {
        errors.errorsMessages.push({
            message: 'canBeDownloaded should be boolean',
            field: 'canBeDownloaded',
        });
    }
    if (video.minAgeRestriction && !(video.minAgeRestriction <= 18 && video.minAgeRestriction >= 1)) {
        errors.errorsMessages.push({
            message: 'minAgeRestriction should from 1 to 18',
            field: 'minAgeRestriction',
        });
    }
    return errors;
};
const updateVideoController = (req, res) => {
    const id = +req.params.id;
    const video = db_1.db.videos.find(video => video.id === id);
    if (!video) {
        res.sendStatus(404);
    }
    const body = req.body;
    const errors = inputValidation(body);
    if (errors.errorsMessages.length) {
        res
            .status(400)
            .json(errors);
        return;
    }
    const updatedVideo /*VideoDBType*/ = Object.assign(Object.assign({}, video), body);
    db_1.db.videos = db_1.db.videos.map(video => video.id === id && updatedVideo);
    res
        .sendStatus(204);
};
exports.updateVideoController = updateVideoController;
