(function(exports){

  function NoteController(noteViewModel){
    this.showNotes = noteViewModel.printList();
  }

NoteController.prototype.showList = function() {
  list = document.getElementById('app').appendChild(this.showNotes);
};

exports.NoteController = NoteController;

})(this);
