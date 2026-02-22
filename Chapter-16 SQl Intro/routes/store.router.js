import express from 'express'
import { gethomesList, getBooking, getFevouriteList, getIndex, gethomesDetails, postFevourite, postDeleteFavourite } from '../controllers/store.controler.js';

const storeRouter = express.Router();

storeRouter.get("/", getIndex);
storeRouter.get("/homes", gethomesList);
storeRouter.get("/booking", getBooking);
storeRouter.get("/favourites", getFevouriteList);
storeRouter.post("/favourites", postFevourite);
storeRouter.get("/homes/:homeId", gethomesDetails);
storeRouter.post("/delete-favourite/:homeId", postDeleteFavourite);

export default storeRouter;