"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findVideoController = void 0;
const db_1 = require("../db/db");
const findVideoController = (req, res) => {
    const id = +req.params.id;
    const video = db_1.db.videos.find(video => video.id === id);
    if (!video) {
        res.sendStatus(404);
    }
    res
        .status(200)
        .json(video);
};
exports.findVideoController = findVideoController;
