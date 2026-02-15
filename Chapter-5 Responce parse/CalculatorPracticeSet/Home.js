const fs = require("fs");
const path = require("path");
const sumHandler = require("./sum");

const home = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Calculator Home</title>
                </head>
                <body>
                    <div>
                        <h3>This is the Home Page of Calculator</h3>

                        <br/>
                        <a href="/calculatorPage" >Calculator Page</a>
                    </div>
                </body>
            </html>
    `);
    return res.end();
  } else if (req.url === "/calculatorPage") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Calculator Page</title>
        </head>
        <body>
            <h2>
                This is actual page of calculator
            </h2>
            <div>
                <form action="/submit-input" method="post">
                    <label for="inputSpace" >InputSpace</label>
                    <br/>
                    <input name="first" type="text" placeholder="Enter first.."/>
                    <br/>
                    <input name="second" type="text" placeholder="Enter second.." />
                    <br/>
                    <button type="submit">add</button>
                </form>
            </div>
        </body>
        </html>
        
        `);

    return res.end();
  } else if (req.url === "/submit-input" && req.method == "POST") {
    // const body = [];
    // res.on("data", (chunck) => {
    //   console.log(chunck);
    //   body.push(chunck);
    // });

    // res.on("end", () => {
    //   const bodyObj = Buffer.concat(body).toString();
    //   console.log(bodyObj);
    // });

    return sumHandler(req, res);
  }
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculator Home</title>
    </head>
    <body>
        <div>
            <h3>404 Path is not found !</h3>

            <br/>
            <a href="/" >Back to Home Page</a>
        </div>
    </body>
    </html>
    `);
  res.end();
};

module.exports = home;
