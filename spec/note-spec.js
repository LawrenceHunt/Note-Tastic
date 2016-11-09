// var Note = require("./note-model");
// var NoteList = require("./note-list-model");

function isTextShowing(){
  var note = new Note("this is a note");
  if (note.returnNote() !== "this is a note"){
    console.log('note NOT displaying correctly');
  } else {
      console.log('note displaying correctly');
    }
}

// note list specs
function canDisplayNotes(){
  var noteList = new NoteList();
  noteList.newNote("this is a note");
  var noteListView = new NoteListView(noteList);
  noteListView.printList();

  list = document.getElementById('noteList');
  if (list.innerHTML !== "<li>this is a note</li>") {
    console.log('notes displaying INcorrectly');
  } else {
    console.log('notes displaying correctly');
  }

}

isTextShowing();
canDisplayNotes();
