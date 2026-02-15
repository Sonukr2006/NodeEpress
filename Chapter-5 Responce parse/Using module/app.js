const http = require('http');
const UserRequestHandler = require('./user');

const server = http.createServer(UserRequestHandler);

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
})