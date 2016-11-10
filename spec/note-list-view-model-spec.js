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
    assert.isTrue(noteListView.displayNotes() === "<ul><li><div><a href=\"#notes/6\">Lorem ipsum dolor si...</a></div></li></ul>");
}

testDisplayNotes();

function testDisplayOfURL() {
  var noteList = new NoteList();
  noteList.saveNote("Test Note");
  noteList.saveNote("Test 2");
  var noteListView = new NoteListView(noteList);
  var actual = noteListView.displayNotes();
  var expected ="<ul><li><div><a href=\"#notes/7\">Test Note</a></div></li><li><div><a href=\"#notes/8\">Test 2</a></div></li></ul>";
  assert.isTrue(expected === actual);

}

testDisplayOfURL();
