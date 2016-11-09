function testSingleNoteView() {
  var note = new Note("Hertfordshire rocks!");
  var singleNoteView = new SingleNoteView(note);
  singleNoteView.renderView();

  if ( document.getElementById('note').textContent !== "Hertfordshire rocks!") {
    console.log("Failed: single note view");
  } else {
    console.log("Passed: single note view");
  }
}

testSingleNoteView();
