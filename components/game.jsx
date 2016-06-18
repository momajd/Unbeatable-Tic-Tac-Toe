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

  render: function() {

    return (
      <div>
        <BoardComponent board={this.state.board} updateBoard={this.updateBoard}/>
      </div>
    );
  }

});

module.exports = Game;
