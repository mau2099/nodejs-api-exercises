const fs = require("fs");

console.log("directorio", __dirname);

fs.mkdir(__dirname + "/mau2099/esc-js/node", { recursive: true }, err => {
  if (err) return console.log(err);
});
