function testNoteController() {
  var noteList = new NoteList();
  noteList.saveNote("Apples");
  var controller = new NoteController(noteList);
  assert.isTrue(controller.noteListView instanceof NoteListView);
}

testNoteController();

function testInsertNotes() {
  var noteList = new NoteList();
  noteList.saveNote("Cheese");
  var controller = new NoteController(noteList);

  var dummyElement = document.createElement('div', {id: 'app'});
  document.getElementById = function() {
    return dummyElement;
  };
  var notes = controller.noteListView.displayNotes();
  document.getElementById('app').innerHTML = notes;
  assert.isTrue(dummyElement.innerHTML === notes);
}

testInsertNotes();

function testDisplaySingleNote(){
  noteList = new NoteList();
  noteList.saveNote('Hi, single note');
  var note = noteList.showNotes()[0];
  note.id = 20;
  var controller = new NoteController(noteList);
  var element = document.createElement('div', {id: 'app'});
  controller.insertNotes();

  window.location.hash = '#notes/20';

  var inApp = document.getElementById('app');

  actual = inApp.innerHTML;
  expected = '<div>Hi, single note</div>';

  assert.isTrue(actual === expected);
}

testDisplayNotes();
