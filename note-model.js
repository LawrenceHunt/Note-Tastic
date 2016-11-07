(function(exports) {

  function Note() {

    this.title = "";
    this.text = "";


  }

    Note.prototype.setText = function(text){
      this.text = text;
    };

    Note.prototype.returnNote = function(){
      return this.text;
    };


  // exports.Note = Note;
  module.exports = Note;
})(this);
