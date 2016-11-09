(function(exports) {

  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.printList = function(){
    var list = document.createElement('ul');
    list.id = "noteList";

    for (i = 0; i <= this.noteList.returnList().length; i++) {
      note = document.createElement('li').appendChild('div');
      note.textContent = this.noteList.returnList()[i].returnNote();
      list = document.getElementById('noteList');
      list.appendChild(note);
    }
    return list;
  };

  exports.NoteListView = NoteListView;

  // module.exports = Note;
})(this);
