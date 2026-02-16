import express from 'express'
import { houseListAtHome, getBooking, getFevouriteList, getIndex } from '../controllers/store.controler.js';

const storeRouter = express.Router();

storeRouter.get("/", getIndex);
storeRouter.get("/homes", houseListAtHome);
storeRouter.get("/booking", getBooking);
storeRouter.get("/favourites", getFevouriteList);

export default storeRouter;