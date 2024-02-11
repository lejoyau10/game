const http = require ('http');
const { url } = require('inspector');
const server = http.createServer((req, res)=> {
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if (req.url ==='/about'){
        res.end('here is our short story')
    }res.end(`<h1> Oop!</h1>
<p> we can seem to find the page your are loking for </p>
<a href="/"> back home </a>`)
})

server.listen(5000);