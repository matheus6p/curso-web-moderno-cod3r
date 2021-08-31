const moduloA = require("../../moduloA");
console.log(moduloA.ola);

//modulo core do node. não é necessário fazer instalação nenhuma biblioteca adicional
const http = require("http");
http
  .createServer((req, res) => {
    res.write("Bom dia");
    res.end();
  })
  .listen(8080);
