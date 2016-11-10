function testNoteList(text) {
    var noteList = new NoteList();
    noteList.saveNote(text);
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.noteList === noteList);
}

testNoteList("Vil du bli med meg hjem og høre meg spille ukulele");


function testDisplayNotes() {
    var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idemque diviserunt naturam hominis in animum et corpus. Totum autem id externum est,";
    var noteList = new NoteList();
    noteList.saveNote(text);
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.displayNotes() === "<ul><li><div>Lorem ipsum dolor si...</div></li></ul>");
}

testDisplayNotes();

function testDisplayOfURL() {
  var notelist = new NoteList();
  noteList.saveNote("Test Note");
  noteList.saveNOte("Test 2");
  var noteListView = new NoteListView(notelist);
  var actual = noteListView.displayNotes();
  var expected ="<ul><li><div><a href='#notes/1'>Test Note</div></li><li><div><a href='#notes/2'>Test 2</div></li></ul>";

  assert.isTrue(expected === actual);

}

testDisplayOfURL();
