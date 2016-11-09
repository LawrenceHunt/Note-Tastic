(function(exports){

function SingleNoteView(note){
this.note = note;
}

SingleNoteView.prototype.renderView = function(){
  document.getElementById('note').textContent = this.note.returnText();
};

exports.SingleNoteView = SingleNoteView;

})(this);
