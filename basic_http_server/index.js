const http = require('http');
const port = 8000;


function reqHandler(request, response){
    console.log(request.url);
    response.end('Gotcha !!!')
}

const server = http.createServer(reqHandler);


server.listen(port, function(e){
    if(e){
        console.log(e);
        return;
    }

    console.log("Server running on port: ", port);

});