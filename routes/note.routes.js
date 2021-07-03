const express = require('express');
const {Authenticate} = require('../middleware/demoMiddleware')
const Router = express.Router();


const notes = require('../controller/note.controller')
Router.post('/',notes.create);
Router.get('/',Authenticate,notes.findAll);
Router.get('/:id',notes.findById)
Router.put('/:id',notes.update)
Router.delete('/:id',notes.delete)



module.exports = Router;