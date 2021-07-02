const express = require('express');
const Router = express.Router();


const notes = require('../controller/note.controller')
Router.post('/',notes.create);
Router.get('/',notes.findAll);
Router.get('/noteById/:id',notes.findById)
Router.put('/:id',notes.update)
Router.delete('/:id',notes.delete)



module.exports = Router;