const http = require('http');
const port = 8000;

const server = http.createServer();


server.listen(port, function(e){
    if(e){
        console.log(e);
        return;
    }

    console.log("Server running on port: ", port);

});