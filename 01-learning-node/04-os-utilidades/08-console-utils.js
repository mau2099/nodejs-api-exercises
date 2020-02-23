// %s -> stream
// %d -> numero
// %j -> json

// console.log("Un %s y un %d", "Perrito", 2);

    //Es lo mismo que utilizar la funcion util de node desde la terminal
    // > node
    // > util.format("un %s y %d", "perrito", 2)

// console.info("Hello World");

// console.warn("Hello Warning");

// console.assert(42 === "42");

// console.trace("hello", { error: "contenido del error" });

const util = require("util");
const debuglog = util.debuglog("foo");
debuglog("hello from foo")
// para ejecutar este codigo, se debe crear una etiqueta de desarrollo
// en la terminal hacerejecutar
// > NODE_DEBUG=foo node 08-console-utils.js    