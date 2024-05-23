//----------------------OS MODULE------------------------------------

const os = require('os')

// Get the info of user

const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`The system uptime in seconds is : ${os.uptime()} seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    total_mem:os.totalmem(),
    free_mem:os.freemem(),
}

console.log(currentOS);