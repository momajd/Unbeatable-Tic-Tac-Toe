const React = require('react');
const ReactDOM = require('react-dom');
// components
var Game = require('./components/game');


document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Game />, document.getElementById('main'));
});
