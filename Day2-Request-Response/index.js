const http = require('http');
const { escape } = require('querystring');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<header><title> Sonu Coding club </title><header>');
        res.write('<body><h1> Home page rendering </h1></body>')
        res.write('</html>');
        return res.end();
    }
    else if(req.url === '/about'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<header><title> Sonu Coding club </title><header>');
        res.write('<body> Hello, guys dekho na dekho na </body>')
        res.write('</html>');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<header><title> Sonu Coding club </title><header>');
    res.write('<body> Hello, guys aapne ye kya diya </body>')
    res.write('</html>');
    res.end();
});

const PORT = 3002;
server.listen(PORT, () => {
    console.log(`Server is running on thris address http://localhost:${PORT}`);
});