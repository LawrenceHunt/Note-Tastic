var Note = require("./note-model");
var NoteList = require("./note-list-model");

var note = new Note("Hello, this is a second note.");

  if (note.returnNote() !== "Hello, this is a second note.") {
    throw new Error("Test failed");
  } else {
    console.log("Test passed");
  }

  note.updateText("Hello, this is a third note.");
  if (note.returnNote() !== "Hello, this is a third note.") {
    throw new Error("Test failed");
  } else {
    console.log("Test passed");
  }

// note list specs

  var notelist = new NoteList();

  notelist.newNote("This is a new note");
  if (notelist.notes[0].text !== "This is a new note"){
    throw new Error("Test Failed");
  } else {
    console.log("Test passed")
  }
