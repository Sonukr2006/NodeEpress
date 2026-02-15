import express from "express";
import path from 'path'
import userRouter from "./routes/userRouter.js";
import hostRouter from "./routes/hostRouter.js";
import rootDir from './utils/pathUtil.js'
import { Page404 } from "./controllers/404.js";
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'view');
app.use(express.static(path.join(rootDir, 'public')))
app.use(express.static(path.join(rootDir, 'view')))

// urlencoded means req.body ko nikalne ke liye use krte hai 
app.use(express.urlencoded());
// Express se router method nikala hai use kiye hai
// .use middlewares ke liye use hota hai 
app.use(userRouter);
app.use("/host",hostRouter);

app.use(Page404)

const PORT = 3008;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
