import express from "express";
import path from 'path'
import userRouter from "./routes/userRouter.js";
import hostRouter from "./routes/hostRouter.js";


import rootDir from './utils/pathUtil.js'
const app = express();
app.use(express.static(path.join(rootDir, 'public')))

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
console.log(rootDir);

app.use(express.urlencoded());

app.use(userRouter);
app.use("/host",hostRouter);

app.use((req, res, next) =>{
	res.status(404).sendFile(path.join(rootDir, 'view', '404page.html'))
	
})

const PORT = 3008;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
