
const http = require('http')

const server = http.createServer()

server.on('response',(req,res) => {
    res.end("Welcome")
})

server.listen(5000)