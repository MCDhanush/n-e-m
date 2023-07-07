
const os = require("os")
console.log("Free memory",os.freemem()/1024/1024/1024)
console.log("total memory",os.totalmem()/1024/1024/1024)
console.log("Version",os.version())
console.log("processor",os.cpus());

