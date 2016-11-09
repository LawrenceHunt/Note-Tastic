(function(exports){

  function NoteList(){
    this.notes = [];
  }

  NoteList.prototype.addNote = function(text){
    note = new Note(text);
    this.notes.push(new Note(text));
  };

  NoteList.prototype.returnList = function(){
    return this.notes;
  };

  exports.NoteList = NoteList;

// module.exports = NoteList;

})(this);
