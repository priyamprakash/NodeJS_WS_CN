const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middle ware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('assets'));

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
    console.log(req.body);
    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // })

    contactList.push(req.body);
    return res.redirect('back');
});

app.get('/delete-contact/', function(req, res){
    console.log(req.query);
    let phone = req.query.phone;
    let contactIndex= contactList.findIndex(contact => contact.phone == phone);

    if(contactIndex != -1) {
         contactList.splice(contactIndex,1);
         return res.redirect('back');
    }
  
})

app.listen(port, function(err){

    if(err){
        console.log("Error in running the server", err);
    }
    console.log("Express running on port: ", port);
});