const React = require('react');
const ReactDOM = require('react-dom');
// components
var Game = require('./components/game');

// TODO remove after testing
window.Board = require('./js/board');
window.TicTacToeNode = require('./js/tic_tac_toe_node');
window.ComputerPlayer = require('./js/computer_player');
window.board = new Board
// board.placeMark([0,0])
// board.placeMark([0,1])
// board.placeMark([2,0])
// board.placeMark([1,0])
// board.placeMark([1,1])
// board.placeMark([2,1])
// board.placeMark([2,2])
// board.placeMark([0,0]) //x
// board.placeMark([2,0]) //o
// board.placeMark([0,1]) //x
window.node = new TicTacToeNode(board);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Game />, document.getElementById('main'));
});
