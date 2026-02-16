import express from 'express'
import { getPostHome, getAddHome, getHostHomes } from '../controllers/host.controler.js';


const hostRouter = express.Router();

hostRouter.get("/add-home", getAddHome);
hostRouter.get("/host-homes", getHostHomes);
hostRouter.post("/add-home", getPostHome);

export default hostRouter;