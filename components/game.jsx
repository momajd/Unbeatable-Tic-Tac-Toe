var React = require('react');
var BoardComponent = require('./board');
var Board = require('../js/board');

var Game = React.createClass({

  getInitialState: function() {
    return {
      board: new Board
    };
  },

  updateBoard: function(pos) {
    this.state.board.placeMark(pos);
    this.setState({ board: this.state.board });
  },

  restartGameAsX: function() {
    this.setState({ board: new Board});
  },

  restartGameAsO: function() {
    this.setState({ board: new Board});
  },

  render: function() {
    var modal;
    if (this.state.board.isWon() || this.state.board.isTie() ) {
      // we don't need to check if player won because that should never happen
      var text = this.state.board.isWon() ? "You lost" : "You tied" ;

      modal = (
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
