const express = require('express')
const bodyParser = require('body-parser')
const app = express();


app.use((res, req, next) => {
    console.log("First Path /");
    next();
})
app.use((res, req, next) => {
    console.log("Second Middleware .. ");
    next()
})

app.use("/", (req, res, next) => {
    console.log("Third Path /")
    next();
})
app.get("/contact-us", (req, res, next) => {
    console.log("Third Path /")
    res.send(`
        <p> WelCome we all </p> 
        <form action="/contact-us" method="POST" >
          <input placeholder="Enter Email" name= "email"/>
          <input placeholder= "Enter Password" name = "password" />
          <button>Submit</button>
        </form>
    `);
})

app.use(bodyParser.urlencoded());
app.post("/contact-us", (req, res) => {
  console.log(req.body);
  
  res.send(`<h3>we contact shortly</h3>`)
})


const PORT = 3005;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})