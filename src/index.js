var noteList = new NoteList();
noteList.saveNote("Apple");
noteList.saveNote("Orange");
noteList.saveNote("Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
"Idemque diviserunt naturam hominis in animum et corpus. Totum autem id externum est," +
"et quod externum, id in casu est. Bonum valitudo: miser morbus. Duo Reges:");

var controller = new NoteController(noteList);

controller.insertNotes();
makeUrlChangeNoteForCurrentPage();
