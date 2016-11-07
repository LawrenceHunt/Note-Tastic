var Note = require("./note-model");

var note = new Note();

  note.setText("Hello, this is a second note.");
  if (note.returnNote() !== "Hello, this is a second note.") {
    throw new Error("Hello, this is a second note.'!");
  } else {
    console.log("test passed");
  }


  note.setText("Hello, this is a second note.");
  if (note.returnNote() !== "Hello, this is") {
    throw new Error("Hello, this is a second note.'!");
  } else {
    console.log("test passed");
  }
