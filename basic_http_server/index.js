const http = require('http');
const port = 8000;


function reqHandler(request, response){
    console.log(request.url);
    response.writeHead(200, {'content-type': 'text-html'})
    response.end('<h1>Gotcha Render HTML!!!</h1>');
}

const server = http.createServer(reqHandler);


server.listen(port, function(e){
    if(e){
        console.log(e);
        return;
    }

    console.log("Server running on port: ", port);

});