const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Hello World !</title></head>");
    res.write(
      '<body><form action="/create-user" method ="POST"><input type="text" name="username" ><button type="submit">Submit</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split("=")[1]);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Users</title></head>");
    res.write("<body> <ul>");
    res.write("<li>Anthony</li>");
    res.write("<li>Johnny</li>");
    res.write("</body></ul>");
    res.write("</html>");
    return res.end();
  }
});

server.listen(3000);
