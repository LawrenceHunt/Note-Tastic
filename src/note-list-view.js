(function(exports) {
  function NoteView(list) {
    this.notes = list.returnNotes();
  }

  NoteView.prototype.html = function() {
    var htmlString = "<ul>";
    for (var i = 0; i < this.notes.length; i++) {
      htmlString += "<li><div>" + this.notes[i].returnText() + "</div></li>";
    }
    htmlString += "</ul>";
    return htmlString;
  };

  exports.NoteView = NoteView;

})(this);
