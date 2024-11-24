"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTestingController = void 0;
const db_1 = require("../db/db");
const deleteTestingController = (req, res) => {
    db_1.db.videos = [];
    res
        .sendStatus(204);
};
exports.deleteTestingController = deleteTestingController;
