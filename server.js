// Load env variables
if (process.env.NODE_ENV != "production") require("dotenv").config();

// Import Express Dependencies
const express = require("express");
const cors = require("cors");
const connectToDB = require("./config/db");
const NoteController = require("./controllers/NoteController");

// Create express app
const app = express();

app.use(express.json());
app.use(cors());

// Connect to DB
connectToDB();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello");
});

// Get all notes
app.get("/notes", NoteController.fetchAllNotes);

// Create new note
app.post("/notes", NoteController.addNewNote);

// Get note by ID
app.get("/notes/:id", NoteController.fetchNoteById);

// Update the note
app.put("/notes/:id", NoteController.updateNote);

// Delete the note
app.delete("/notes/:id", NoteController.deleteNote);

app.listen(port);
