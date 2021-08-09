const http = require('http');
const server = http.createServer();

server.listen(4000, 'localhost');

server.on('listening', () => {
    console.log('Serveur démarré !');
});

server.on('request', (request, response) => {
    const {method, url} = request;
    if(url==="/connect"){
        console.log('URL demandée : %s %s', method, url);
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify({ a: 1 }));

    }
    console.log('URL demandée : %s %s', method, url);
    response.write('<h1>Coucou</h1>', 'binary')
    response.end(null, 'binary');
});