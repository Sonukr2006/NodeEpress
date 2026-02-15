import express from 'express'
import path from 'path';
import rootDir from '../utils/pathUtil.js'


const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.render('addHome', { pageTitle :"addHome airbnb"})
});

const houseArr = [];
hostRouter.post("/add-home", (req, res, next) => {
	houseArr.push({houseName: req.body.houseName});
  res.render('homeAdded', { pageTitle :"Home added airbnb"})
});

export default hostRouter;
export {houseArr};