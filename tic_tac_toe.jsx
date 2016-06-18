const React = require('react');
const ReactDOM = require('react-dom');
// components
var Game = require('./components/game');

// TODO remove after testing
// window.Board = Board

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Game />, document.getElementById('main'));
});
