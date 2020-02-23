const fs = require("fs");

fs.copyFile(
  "00-text-file.txt",
  "archivo-copiado.txt",
  err => err && console.log("Error --> ", err)
);
