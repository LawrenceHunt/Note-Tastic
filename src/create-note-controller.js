(function(exports) {

  function listenForCreateNote() {
    document.getElementById("noteSubmit").addEventListener("click", function(clickEvent){
      text = document.getElementById('noteText').value;
      clickEvent.preventDefault();
      noteList.saveNote(text);
      controller.insertNotes();
    });
  }

  exports.listenForCreateNote = listenForCreateNote;

})(this);
