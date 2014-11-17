var http = require("http");
var contador = 0;

function onRequest(request, response) {
  contador++;
  console.log("Peticion Recibida. Peticiones: " + contador);
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<b>Hola Mundo. Peticiones: " + contador);
  response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Servidor Iniciado.");

