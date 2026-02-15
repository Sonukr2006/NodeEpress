import express from "express";
import path from 'path'
import userRouter from "./routes/userRouter.js";
import hostRouter from "./routes/hostRouter.js";


import rootDir from './utils/pathUtil.js'
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'view');
app.use(express.static(path.join(rootDir, 'public')))
app.use(express.static(path.join(rootDir, 'view')))

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
console.log(rootDir);

app.use(express.urlencoded());

app.use(userRouter);
app.use("/host",hostRouter);

app.use((req, res, next) =>{
	res.status(404).render('404page', { pageTitle :"404 Page Not Found"})
})

const PORT = 3008;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
