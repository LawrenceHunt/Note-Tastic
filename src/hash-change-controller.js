(function(exports) {

  function makeUrlChangeNoteForCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  }

  function showNoteForCurrentPage() {
    showNote(getNoteIdFromUrl(window.location));
  }

  function getNoteIdFromUrl(url) {
    return url.hash.split("#notes/")[1];
  }

  function showNote(id) {
    var note = this.noteList.locateNote(parseInt(id));
    var singleNote = new SingleNote(note);
    document
      .getElementById("singleView")
      .innerHTML = singleNote.returnHTML();
  }

  exports.makeUrlChangeNoteForCurrentPage = makeUrlChangeNoteForCurrentPage;

})(this);
