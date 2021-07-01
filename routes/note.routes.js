module.exports = (app) => {

const notes = require('../controller/note.controller')
app.post('/note',notes.create);
app.get('/notes',notes.findAll);
app.get('/noteById/:id',notes.findById)
app.put('/note/:id',notes.update)
app.delete('/note/:id',notes.delete)

}