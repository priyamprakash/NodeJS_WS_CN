const express = require('express');
const port = 8000;

const app = express();

app.listen(port, function(err){

    if(err){
        console.log("Error in running the server", err);
    }

    console.log("Express running on port: ", port);

});