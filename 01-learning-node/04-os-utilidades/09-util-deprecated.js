const util = require("util");

const helloPluto = util.deprecate(()=>{
    console.log("hello pluto")
}, "this function it's deprecated!")

helloPluto();

// Para debuggear revisar el video en el min 11:14
// https://platzi.com/clases/1646-backend-nodejs/22023-consola-utilidades-y-debugging/
//node --inspect 07-console-class.js  
// se ejecuta 