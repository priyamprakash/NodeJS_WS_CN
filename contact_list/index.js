const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

var contactList = [
    {
        name:"Axar",
        phone:"222111"
    },
    {
        name:"Joe",
        phone:"222222"
    },
    {
        name:"Tony",
        phone:"222333"
    },
    {
        name:"Stark",
        phone:"222444"
    },
    {
        name:"Michael",
        phone:"222555"
    }
]

app.get('/', function(req, res){
    return res.render('home', 
    { 
        title : "Contact List",
        contact_list : contactList
        });
});


app.get('/practice', function(req, res){
    return res.render('practice', {
        title : "Play with EJS"
    });
});

app.post('/create-contact', function(req,res){
    return res.redirect('/practice');
})

app.listen(port, function(err){

    if(err){
        console.log("Error in running the server", err);
    }
    console.log("Express running on port: ", port);
});