"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingRouter = void 0;
const express_1 = require("express");
const deleteTesitngController_1 = require("./deleteTesitngController");
exports.testingRouter = (0, express_1.Router)();
exports.testingRouter.delete('/', deleteTesitngController_1.deleteTestingController);
