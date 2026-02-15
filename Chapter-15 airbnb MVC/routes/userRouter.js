import express from 'express'
import { houseListAtHome } from '../controllers/home.js';

const userRouter = express.Router();

userRouter.get("/", houseListAtHome);

export default userRouter;