const sumHandler = (req, res) => {
    console.log("In sum Processing : ", req.url);
    const body = [];
    req.on("data", (chunck) => {
      body.push(chunck);
    });

    req.on("end", () => {
      const bodyObj = Buffer.concat(body).toString();
      const params = new URLSearchParams(bodyObj);
      const obj = Object.fromEntries(params);
      const result = parseInt(obj.first) + parseInt(obj.second);
      
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
                <h3>Sum = ${result}</h3>

            </div>
        </body>
        </html>
        `);
        return res.end();
      });


}

module.exports = sumHandler;