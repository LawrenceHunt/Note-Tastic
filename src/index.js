var noteList = new NoteList();

noteList.addNote("Favourite drink: seltzer");
noteList.addNote("Favourite food: eggs");
noteList.addNote("Favourite animal: pig");
noteList.addNote("Favourite planet: mars");

var noteView = new NoteView(noteList);
var noteController = new NoteController(noteView);
noteController.showList();

note = new Note("Zebras are a fun kind of animal");

var singleNoteView = new SingleNoteView(note);

singleNoteView.renderView();
//
// var note = new Note("Hertfordshire rocks!");
// var singleNoteView = new SingleNoteView(note);
// singleNoteView.renderView();
