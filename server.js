//create the server
const http = require('http');

http.createServer((request, response) => {
    if (request.url === "/gato" && request.method === "POST"){
        console.log(request.body);
        response.end("miau");
    } else if (request.url === "/dri" && request.method === "GET"){
        response.end("ronrom")
    } 
    else {
        response.end("aqui nao aceitamos quem nao gosta de gatos");
    }
}).listen(8080,console.log("rodando na 8080"))