const http = require('http');
const home = require('./Home');

const server = http.createServer(home);


const PORT = 3002;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})