const { Writable } = require("stream");

const writableStream = new Writable({
  write(chunk, enconding, callbak) {
    console.log(chunk.toString());
    callbak();
  }
});

process.stdin.pipe(writableStream);