const os = require("os");
// console.log("CPU Info", os.cpus());
// console.log("IP Address", os.networkInterfaces().lo.map(i => i.address));
// console.log("Free Memory", `${os.freemem() / 1e6} MB`);
// console.log("Total Memory", `${os.totalmem() / 1e6} MB`);
// console.log("Type OS", `${os.type()}`);
// console.log("OS Version", `${os.release()}`);
console.log("User Info", os.userInfo());
