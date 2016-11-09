var note = new Note("Hello World");
var note2 = new Note("");

function testNoteReturnsText() {
  if (note.returnText() !== "Hello World") {
    throw new Error("Note is not returning text");
  }
  else { console.log("Passed: " + note.returnText()); }
}

function testNotesHaveAnId(){
  if (note2.id !== 1) {
    console.log("FAILED: note2 should have an id of 1");
  } else {
    console.log("SUCCESS! note2 has an id of 1");
  }
}



testNoteReturnsText();
testNotesHaveAnId();
