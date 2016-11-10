(function(exports) {

  function SingleNote(note) {
    this.singleNote = note;
  }

  SingleNote.prototype.returnHTML = function () {
    return '<div>' + this.singleNote.getText() + '</div>';
  };

  exports.SingleNote = SingleNote;
})(this);
