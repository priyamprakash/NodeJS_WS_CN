const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const Contact = require('./model/contact');
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
    Contact.find({})
    .then(contacts => {
        // console.log(contacts)
        return res.render('home',  { 
            title : "Contact List",
            contact_list : contacts
        });
    })
    .catch(err => {
        console.log('Error in fetching contacts from db');
    });
});




app.get('/practice', function(req, res){
    return res.render('practice', {
        title : "Play with EJS"
    });
});

app.post('/create-contact', function(req,res){
    console.log(req.body);

    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    })
    .then(newContact => {
        console.log('******', newContact);
    })
    .catch(err => {
        console.log('Error in creating a contact');
    });

    return res.redirect('back');
});



app.get('/delete-contact', function(req, res){
    console.log(req.query);
    let id = req.query.id;
   
    Contact.findByIdAndDelete(id)
    .then(() => {
        console.log('Contact deleted successfully');
    })
    .catch(err => {
        console.log('Error deleting object from db');
    });
    
    return res.redirect('back');
});


app.listen(port, function(err){

    if(err){
        console.log("Error in running the server", err);
    }
    console.log("Express running on port: ", port);
});