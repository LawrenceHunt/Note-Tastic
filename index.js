var noteList = new NoteList();

noteList.addNote("Favourite drink: seltzer");

var noteListView = new NoteListView(noteList);
var noteController = new NoteController(noteListView);

noteController.showList();
