import { Router } from 'express';
import { deleteTestingController } from './deleteTesitngController';

export const testingRouter = Router();

testingRouter.delete('/', deleteTestingController);