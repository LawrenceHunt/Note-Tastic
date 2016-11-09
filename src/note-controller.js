(function(exports) {
  function NoteController(view) {
    this.htmlBody = view.html();
  }

  NoteController.prototype.showList = function () {
    document.getElementById('app').innerHTML = this.htmlBody;
  };

  exports.NoteController = NoteController;
})(this);
