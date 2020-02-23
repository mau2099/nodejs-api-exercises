const http = require("http");

const server = http.createServer();

server.on("request", (req, resp) => {
  if (req.method === "POST") {
    if (req.url == "/echo") {
      let body = [];
      req
        .on("data", chunk => {
          body.push(chunk);
        })
        .on("end", () => {
          resp.writeHead(200, { "Content-Type": "text/plain" });
          body = `Contenido del Chunk --> ${Buffer.concat(body).toString()}`;
          resp.end(body);
          console.log("body", body);
        });
    } else if (req.url == "/birthday") {
      let body = [];
      req
        .on("data", chunk => {
          body.push(chunk);
        })
        .on("end", () => {
          console.log("body", Buffer.concat(body).toString());
          resp.writeHead(200, { "Content-Type": "text/plain" });
          body = `Dia de Cumpleaños --> ${new Date(
            Buffer.concat(body).toString()
          ).toLocaleDateString("es-ES", { weekday: "long" })}`;
          resp.end(body);
          console.log("body", body);
        });
    }
  } else if (req.method == "GET" && req.url == "/test") {
    resp.statusCode = 200;
    resp.setHeader("Content-Type", "text/plain");
    resp.end("Contenido mostrado en texto plano");
  } else {
    resp.statusCode = 404;
    resp.end();
  }
});

server.listen(2098);
console.log("Running", {
  Port: 2098,
  statusCode: "Listening",
  url: "http://localhost:2098/"
});
