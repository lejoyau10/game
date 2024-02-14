// CREATE A SERVER
// <============000000=======================>

const http = require('http')
const server = http.createServer()

server.on('request', (req, res)=>{
    res.end('Welcome')
})

server.listen(5000)