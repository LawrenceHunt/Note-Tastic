(function(exports) {

  function Note(text) {

    this.text = text;


  }

    Note.prototype.updateText = function(text){
      this.text = text;
    };

    Note.prototype.returnNote = function(){
      return this.text;
    };


  // exports.Note = Note;
  module.exports = Note;
})(this);
