function testNoteControllerIsInstantiated() {
  var noteList = new NoteList();
  noteList.addNote("Hello Glasgae");
  noteList.addNote("Bye Belfast!");
  var noteView = new NoteView(noteList);
  var noteController = new NoteController(noteView);
  noteController.showList();

  if(document.getElementById('app').innerHTML !== "<ul><li><div>Hello Glasgae</div></li><li><div>Bye Belfast!</div></li></ul>") {
    console.log("Error: test controller is instantiated");
  } else {
    console.log("Passed: controller is instantiated");
  }
}

testNoteControllerIsInstantiated();
