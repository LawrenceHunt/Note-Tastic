var Note = require("./note-model");

(function(exports){

  function NoteList(){

    this.notes = []
  }

  NoteList.prototype.newNote = function(text){
    note = new Note(text);
    this.notes.push(new Note(text));
  };

module.exports = NoteList;

})(this);
