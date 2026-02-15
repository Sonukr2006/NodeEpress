const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

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
        fs.writeFileSync('filee.txt', 'Sonu bhai');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
    

})

server.listen(3000, () => {
    console.log(`Server is running on this address http://localhost:3000`);
})