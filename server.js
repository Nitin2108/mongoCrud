const express = require('express');
const app = express();
const notes = require('./routes/note.routes')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
require('./db/Db');
app.use('/notes',notes);
app.get('/',function(req,res){
    res.send("hello");
})


app.listen(3000,function(){console.log("App is running")});








   