(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Note = require("./note-model");

var note = new Note();

  note.setText("Hello, this is a second note.");
  if (note.returnNote() !== "Hello, this is a second note.") {
    throw new Error("Hello, this is a second note.'!");
  } else {
    console.log("test passed");
  }


  note.setText("Hello, this is a second note.");
  if (note.returnNote() !== "Hello, this is") {
    throw new Error("Hello, this is a second note.'!");
  } else {
    console.log("test passed");
  }

},{"./note-model":2}],2:[function(require,module,exports){
(function(exports) {

  function Note() {

    this.title = "";
    this.text = "";


  }

    Note.prototype.setText = function(text){
      this.text = text;
    };

    Note.prototype.returnNote = function(){
      return this.text;
    };


  module.exports = Note;

})(this);

},{}]},{},[1]);
