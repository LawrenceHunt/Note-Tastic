(function(exports) {

    function NoteListView(noteList) {
        this.noteList = noteList;
    }

    NoteListView.prototype.displayNotes = function () {
      var notes = this.noteList.showNotes();
      var list = notes.map(function(note) {
          return "<li><div>" + chopText(note.getText()) + "</div></li>";
      }).join("");
      return '<ul>' + list + '</ul>';
    };

    function chopText(text) {
      return (text.length > 20) ? text.substr(0,20) + '...' : text;
    }

    exports.NoteListView = NoteListView;
})(this);
