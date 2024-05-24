// const http = require('http')

// const server = http.createServer((req,res) => {
//     console.log("Hello")
//     res.end("Hello World")
// })

// server.listen(5000,() => {
//     console.log("Server listening in port: 5000");
// })

// const http = require('http')

// const server = http.createServer((req,res) => {
//     if(req.url === '/'){
//         res.end("Home Page")
//     }
//     else if(req.url === '/about'){
//         for(let i = 0 ; i < 1000 ; i++){
//             for(let j = 0 ; j < 1000 ; j++){
//                 console.log(`${i} ${j}`);
//             }
//         }
//         res.end("About Page")
//     }
//     else{
//         res.end("Error")
//     }
// })

// server.listen(5000,() => {
//     console.log('Server is listenning on port 5000....');
// })

// readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log(result);
//   }
// });


// const getText = (path) => {
//     return new Promise((res,rej) => {
//         readFile(path,'utf8',(err,data) => {
//             if(err){
//                 rej(err)
//             }
//             else{
//                 res(data)
//             }
//         })
//     })
// }

// const read = async () => {
//   try {
//     const text = await getText("./content/first.txt");
//     const text2 = await getText("./content/second.txt");
//     console.log(text);
//   } catch (err) {
//     console.log(err);
//   }
// };

// read()

// getText('./content/results.txt').then((data) => console.log(data)).catch((err) => console.log(err))

const {readFile,writeFile} = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try{
        const first = await readFilePromise('./content/first.txt','utf8')
        const second = await readFilePromise('./content/second.txt','utf8')
        await writeFilePromise('./content/results-await.txt',`THIS IS AWESOME : ${first} ${second}`)
        console.log(first,second);
    }
    catch(err){
        console.log(err);
    }
}

start()