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
      // we don't need to check if player won because that should never happen
      var text = this.state.board.isWon() ?
                  "No surprise here..." :
                  "Not bad; a tie is the best possible outcome" ;

      modal = (
        // TODO link to github on modal
        <div className='modal-screen'>
          <div className='modal-content'>
            <p>{text}</p>
            <button onClick={this.restartGameAsX}>Play Again as X</button>
            <button onClick={this.restartGameAsO}>Play Again as O</button>
          </div>
        </div>
      );
    }

    return (
      <div>
        {modal}
        <BoardComponent board={this.state.board} updateBoard={this.updateBoard}/>
      </div>
    );
  }

});

module.exports = Game;
