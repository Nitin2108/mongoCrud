const express = require('express');
//const MongoClient = require('mongodb').MongoClient;
const app = express();
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');
const notes = require('./routes/note.routes')

mongoose.Promise = global.Promise;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});



app.use('/notes',notes);
app.get('/',function(req,res){
    res.send("hello");
})


app.listen(3000,function(){console.log("App is running")});








   