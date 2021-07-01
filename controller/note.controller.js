const Note = require("../models/note.model");

exports.create = (req, res) => {
  if (!req.body.content) {
    res.status(400).send({ message: "Note content can not be empty" });
  }

  const note = new Note({
    title: req.body.title || "Default title",
    content: req.body.content,
  });

  note
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({
          message: err.message || "Some error occured while creating note",
        });
    });
};

exports.findAll = (req, res) => {
  Note.find()
    .then((notes) => {
      res.send(notes);
    })
    .catch((err) => {
      res
        .status(500)
        .send({
          message: err.message || "Some error occured while retrieving notes",
        });
    });
};

exports.findById = (req, res) => {
  Note.findById(req.params.id)
    .then((note) => {
      if (!note) res.status(404).send("Note not found with id" + req.params.id);
      res.send(note);
    })
    .catch((err) => {
      res
        .status(500)
        .send({
          message: err.message || "Some error occured while retrieving notes",
        });
    });
};

exports.update = (req, res) => {
  if (!req.body.content)
    res.status(400).send({ message: "Note content can not be empty" });

  Note.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title || "default title",
      content: req.body.content,
    },
    { new: true }
  )
    .then((note) => {
      if (!note) {
        return res
          .status(404)
          .send({ message: "Note not found with id" + req.params.id });
      }
      res.send(note);
    })
    .catch((err) => {
      return res.status(500).send({ message: "error fetching notes" });
    });
};

exports.delete = (req, res) => {
  Note.findByIdAndRemove(req.params.id)
    .then((note) => {
      if (!note) {
        return res
          .status(404)
          .send({ message: "Note not found with id" + req.params.id });
      }
      res.send({ message: "Note deleted Successfully" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Note not found with id " + req.params.id,
        });
      }
      return res
        .status(500)
        .send({ message: "Could not delete note with id" + req.params.id });
    });
};
