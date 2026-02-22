import express from 'express'
import { getAddHome, getHostHomes, getEditHome, postAddHome, postEditHome, postDeleteHome } from '../controllers/host.controler.js';


const hostRouter = express.Router();

hostRouter.get("/add-home", getAddHome);
hostRouter.get("/host-homes", getHostHomes);
hostRouter.post("/add-home", postAddHome);
hostRouter.get("/edit-home/:homeId", getEditHome);
hostRouter.post("/edit-home", postEditHome);
hostRouter.post("/delete-home/:homeId", postDeleteHome);
export default hostRouter;