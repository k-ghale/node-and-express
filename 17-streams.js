const {createReadStream} = require('fs')

const read = createReadStream('./content/results-await.txt',{highWaterMark:90000,encoding:'utf8'})

read.on('data',(result) => {
    console.log(result);
})

read.on('error',(err) => {
    console.log(err);
})