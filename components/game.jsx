var React = require('react');
var BoardComponent = require('./board');
var Board = require('../js/board');
var Player = require('../js/player');
var ComputerPlayer = require('../js/computer_player');

var Game = React.createClass({

  getInitialState: function() {
    return {
      board: new Board,
      userGoesFirst: true
    };
  },

  updateBoard: function(pos) {
    var board = this.state.board;
    board.placeMark(pos);

    if (!board.isOver()) {
      var compPlayer = this.state.userGoesFirst ? board.player2 : board.player1;
      var compMove = compPlayer.move(board);
      board.placeMark(compMove);
    }

    this.setState({ board: board });
  },

  restartGameAsX: function() {
    this.setState({ board: new Board, userGoesFirst: true});
  },

  restartGameAsO: function() {
    var p1 = new ComputerPlayer('x'), p2 = new Player('o');
    var board = new Board(p1, p2);
    var compMove = p1.move(board);
    board.placeMark(compMove);

    this.setState({ board: board, userGoesFirst: false});
  },

  render: function() {
    var modal;
    if (this.state.board.isWon() || this.state.board.isTie() ) {
      // we don't need to check if user won because that should never happen
      var endMessage = this.state.board.isWon() ?
                  <p className="end-message">No surprise there...</p> :
                  <p className="end-message">Not too bad, considering that it's impossible to win..</p> ;

      var fontAwesomeO = <i className="fa fa-circle-o fa-4x" aria-hidden="true"></i>;
      var fontAwesomeX = <i className='fa fa-times fa-4x' aria-hidden='true'></i>;

      modal = (
        <div className='modal-screen'>
          <div className='modal-content'>
            {endMessage}
            <button className="button" onClick={this.restartGameAsX}>
              Play Again as <br/> {fontAwesomeX}</button>
            <button className="button" onClick={this.restartGameAsO}>
              Play Again as <br/> {fontAwesomeO}</button>
            <br/>
            <a href="https://github.com/momajd/Unbeatable-Tic-Tac-Toe">
              <i className="fa fa-github fa-2x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      );
    }

    return (
      <div className="game">
        <h1>Unbeatable Tic-Tac-Toe</h1>
        {modal}
        <BoardComponent board={this.state.board} updateBoard={this.updateBoard}/>
      </div>
    );
  }

});

module.exports = Game;
