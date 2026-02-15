import express from 'express'
import path from 'path'
import rootDir from '../utils/pathUtil.js'



const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  console.log(req.url, req.method);
  res.sendFile(path.join(rootDir, 'view', 'home.html'))
});

export default userRouter;