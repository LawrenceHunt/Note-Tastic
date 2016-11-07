(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// var Note = require("./note-model");

(function(exports){

  function NoteList(){

    this.notes = []
  }

  NoteList.prototype.newNote = function(text){
    note = new Note(text);
    this.notes.push(new Note(text));
  };

module.exports = NoteList;

})(this);

},{}],2:[function(require,module,exports){
(function(exports) {

  function Note(text) {

    this.text = text;


  }

    Note.prototype.updateText = function(text){
      this.text = text;
    };

    Note.prototype.returnNote = function(){
      return this.text;
    };


  // exports.Note = Note;
  module.exports = Note;
})(this);

},{}],3:[function(require,module,exports){
var Note = require("./note-model");
var NoteList = require("./note-list-model");

var note = new Note("Hello, this is a second note.");

  if (note.returnNote() !== "Hello, this is a second note.") {
    throw new Error("Test failed");
  } else {
    console.log("Test passed");
  }

  note.updateText("Hello, this is a third note.");
  if (note.returnNote() !== "Hello, this is a third note.") {
    throw new Error("Test failed");
  } else {
    console.log("Test passed");
  }

// note list specs

  var notelist = new NoteList();

  notelist.newNote("This is a new note");
  if (notelist.notes[0].text !== "This is a new note"){
    throw new Error("Test Failed");
  } else {
    console.log("Test passed")
  }

},{"./note-list-model":1,"./note-model":2}]},{},[3]);
