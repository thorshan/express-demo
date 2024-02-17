const Note = require("../models/Note");

// Get all notes
const fetchAllNotes = async (req, res) => {
  const notes = await Note.find();
  res.json({ notes });
};

// Get note by Id
const fetchNoteById = async (req, res) => {
  const noteId = req.params.id;
  const note = await Note.findById(noteId);
  res.json({ note });
};

const addNewNote = async (req, res) => {
  // Get the data form
  const { title, content } = req.body;
  // Create note
  const note = await Note.create({
    title,
    content,
  });
  res.json({ note });
};

const updateNote = async (req, res) => {
  const noteId = req.params.id;
  const { title, content } = req.body;
  await Note.findByIdAndUpdate(noteId, {
    title: title,
    content: content,
  });
  const note = await Note.findById(noteId);
  res.json({ note });
};

const deleteNote = async (req, res) => {
  const noteId = req.params.id;
  await Note.findByIdAndDelete(noteId);
  res.json({ success: "Record deleted" });
};

module.exports = {
  fetchAllNotes: fetchAllNotes,
  fetchNoteById: fetchNoteById,
  addNewNote: addNewNote,
  updateNote: updateNote,
  deleteNote: deleteNote,
};
