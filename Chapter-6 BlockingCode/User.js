const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<header><title> Sonu Coding club </title><header>');
        res.write('<body>')
        res.write('<h4> Enter Your Details: </h4>')
        res.write('<form action="/submit-data" method="POST">')
        res.write('<label for="name">Name</label>')
        res.write('<input type="text" placeholder="Enter Your Name.." name="name"/>')
        res.write('<label for="male">Male</label>')
        res.write('<input type="radio" id="male" name="gender" value="male"/>')
        res.write('<label for="female">Female</label>')
        res.write('<input type="radio" id="female" name="gender" value="female"/>')
        res.write('<button type="submit">Submit</button>')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>');
        return res.end();
    }else if(req.url.toLowerCase() === '/submit-data' && req.method === 'POST'){
        const body = [];
        req.on('data', (chunch) => body.push(chunch));

        req.on('end', () => {
            const formObj = Buffer.concat(body).toString();
            const params = new URLSearchParams(formObj);
            const bodyObj = Object.fromEntries(params);

            fs.writeFile('filee.txt', JSON.stringify(bodyObj), (error) => {
                console.log("Data Written Succesfully");
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    else{
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<header><title> Sonu Coding club </title><header>');
        res.write('<body>')
        res.write('<h4> By Default Page</h4>')
        res.write('</body>')
        res.write('</html>');
    }
    

})

server.listen(3000, () => {
    console.log(`Server is running on this address http://localhost:3000`);
})