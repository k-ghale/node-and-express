//NORMAL WAY
// const http = require('http')
// const fs = require('fs')


// http.createServer((req,res) => {
//     const data = fs.readFileSync('./content/first.txt','utf8')
//     res.end(data)
// }).listen(5000)

const http = require('http')
const fs = require('fs')

http.createServer((req,res) => {
    const fileStream = fs.createReadStream('./content/results-async.txt','utf8')
    fileStream.on('open',() => {
        fileStream.pipe(res)
    })
    fileStream.on('error',(err) => {
        console.log(err);
    })
}).listen(5000)