const fs = require("fs");

const file = process.argv[2];

if (!file) {
  throw new Error("Falta indicar el nombre del archivo");
}

const content = fs.readFile(file, (err, content) => {
  if (err) {
    return console.log("error", err);
  }
  const lines = content.toString().split("\n").length;
  console.log(lines);
});
