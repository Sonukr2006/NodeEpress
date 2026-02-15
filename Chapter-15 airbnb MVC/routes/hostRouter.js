import express from 'express'
import { getPostHome, getAddHome } from '../controllers/home.js';


const hostRouter = express.Router();

hostRouter.get("/add-home", getAddHome);

hostRouter.post("/add-home", getPostHome);

export default hostRouter;