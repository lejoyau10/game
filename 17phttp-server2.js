const {readFileSync} = require('fs');
const http = require("http");
// get all fille
const homePage = readFileSync('./src/index.html')

const server = http.createServer((req, res) => {
  const url = req.url;
  // home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // about page
  else if (url=== '/about'){
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1> Home About</h1>");
    res.end();
  }
  // 404
  else{
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1> page not found</h1>");
    res.end();
  }
});

server.listen(5000);
