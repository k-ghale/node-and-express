const eventEmitter = require('events')

const customEmitter = new eventEmitter()

customEmitter.on('response',(user,id) =>{
    console.log(`DATA RECIEVED OF USER ${user} WITH THE ID NO: ${id}`);
})

customEmitter.on('response',() =>{
    console.log('Some other Logic');
})

customEmitter.emit('response','Kabin',21)