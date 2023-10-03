const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/contacts_list_db');


//acquire the connection to check if it's successful
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to db'));

db.once('open', function(){
    console.log('Successfully connected to database');
});