(function(exports) {
  function Note(text) {
    this.text = text;
  }

  Note.prototype.returnText = function () {
    return this.text;
  };

  Note.prototype.returnSnippet = function() {
    return this.text.substring(0,20);
  }

  exports.Note = Note;

})(this);
