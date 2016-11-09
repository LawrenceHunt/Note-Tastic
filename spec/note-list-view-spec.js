function testNoteListView() {
  var noteList = new NoteList();
  noteList.addNote("Hello Glasgae ya wee bagpipes");
  noteList.addNote("Bye! I am going to eat a sandwich");
  var noteView = new NoteView(noteList);

  if (noteView.html() !== "<ul><li><div>Hello Glasgae ya wee</div></li><li><div>Bye! I am going to e</div></li></ul>") {
    console.log("FAILED: got " + noteView.html() + " but expected: <ul><li><div>Hello Glasgae ya wee</div></li><li><div>Bye! I am going to e</div></li></ul>");
  } else {
    console.log("Passed: " + noteView.html());
  }
}

testNoteListView();
