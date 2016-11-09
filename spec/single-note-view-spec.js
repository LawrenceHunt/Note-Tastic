function testSingleNoteView() {
  var note = new Note("Hertfordshire rocks! That's because Loz lives there and he's my best and only friend at Makers!");
  var singleNoteView = new SingleNoteView(note);
  singleNoteView.renderView();

  if ( document.getElementById('note').textContent !== "Hertfordshire rocks! That's because Loz lives there and he's my best and only friend at Makers!") {
    console.log("Failed: single note view");
  } else {
    console.log("Passed: single note view");
  }
}

function testSnippet(){
  if(document.getElementById('noteSnippet').textContent !== "Hertfordshire rocks!") {
    console.log("Failed: snippet view");
  } else {
    console.log('Passed: snippet view');
  }
}

testSingleNoteView();
testSnippet();
