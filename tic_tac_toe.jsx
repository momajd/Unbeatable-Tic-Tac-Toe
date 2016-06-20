var React = require('react');
var ReactDOM = require('react-dom');
var Game = require('./components/game');

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Game />, document.getElementById('main'));
});
