const fs = require("fs");
const path = require("path");

const outPath = path.join(__dirname, "out.log");
const errPath = path.join(__dirname, "err.log");

const out = fs.createWriteStream(outPath);
const err = fs.createWriteStream(errPath);

const consoleFile = new console.Console(out, err);

setInterval(() => {
  consoleFile.log(new Date());
  consoleFile.error(new Error());
}, 5000);
