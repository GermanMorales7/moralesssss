const os = require ('os')

//info about current user

const user = os.userInfo()
// console.log(user)
console.log(`The System Uptime is ${os.uptime()}seconds`)

//METHOD RETURNS THE SYSTEM UPTIME IN SECONDS


const currentOS = {
 name:os.type(),
 release:os.release(),
 totalMemory:os.totalmem(),
 freeMem:os.freemem(),
}
console.log(currentOS)

