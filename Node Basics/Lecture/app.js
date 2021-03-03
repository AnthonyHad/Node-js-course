const http = require("http");

const routes = require("./routes"); //requestHandler held here

// function rqListener(req, res) {}
// http.createServer(rdListener);
const server = http.createServer(routes);

server.listen(3000);
