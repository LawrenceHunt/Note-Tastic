function testNoteControllerIsInstantiated() {
  var noteList = new NoteList();
  noteList.addNote("Hello Glasgae");
  noteList.addNote("Bye Belfast!");
  var noteView = new NoteView(noteList);
  var noteController = new NoteController(noteView);

  if(noteController.htmlBody !== "<ul><li><div>Hello Glasgae</div></li><li><div>Bye Belfast!</div></li></ul>") {
    console.log("Error: " + noteController.htmlBody);
  } else {
    console.log("Passed: " + noteController.htmlBody);
  }

  if(noteController.showList() !== "") {
    console.log("Error: " + noteController.showList());
  } else {
    console.log("Passed: " + noteController.showList());
  }
}

testNoteControllerIsInstantiated();
