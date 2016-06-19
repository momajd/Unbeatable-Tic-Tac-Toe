const React = require('react');
const ReactDOM = require('react-dom');
// components
var Game = require('./components/game');

// TODO remove after testing
window.Board = require('./js/board');
window.TicTacToeNode = require('./js/tic_tac_toe_node');
window.ComputerPlayer = require('./js/computer_player');

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Game />, document.getElementById('main'));
});
