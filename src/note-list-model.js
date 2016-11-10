(function(exports) {

    function NoteList() {
        this.notesArray = [];
    }

    NoteList.prototype.saveNote = function(text) {
        var note = new Note(text);
        this.notesArray.push(note);
    };

    NoteList.prototype.showNotes = function() {
        return this.notesArray;
    };

    NoteList.prototype.locateNote = function(id) {
      for (var i = 0; i < this.notesArray.length; i++) {
        if(this.notesArray[i].id === id) {
          return this.notesArray[i];
        }
      }
    };

    exports.NoteList = NoteList;
})(this);
