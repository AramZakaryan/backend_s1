"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVideoController = void 0;
const db_1 = require("../db/db");
const deleteVideoController = (req, res) => {
    const id = +req.params.id;
    const video = db_1.db.videos.find(video => video.id === id);
    if (!video) {
        res.sendStatus(404);
    }
    db_1.db.videos = db_1.db.videos.filter(video => video.id !== id);
    res
        .sendStatus(204);
};
exports.deleteVideoController = deleteVideoController;
