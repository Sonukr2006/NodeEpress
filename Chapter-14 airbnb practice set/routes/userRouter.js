import express from 'express'
import path from 'path'
import { houseArr } from './hostRouter.js';

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  console.log(req.url, req.method);
  console.log(houseArr);
  res.render('home', {homes: houseArr, pageTitle :"Home airbnb", currPage : 'Home'})
});

export default userRouter;