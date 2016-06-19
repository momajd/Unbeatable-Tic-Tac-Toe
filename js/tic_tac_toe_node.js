var Board = require('./board');

var TicTacToeNode = function (board, prevMovePos) {
  this.board = board;
  this.prevMovePos = prevMovePos;
};

TicTacToeNode.prototype.children = function () {
  var children = [];

  for (var i=0; i < 3; i++) {
    for (var j=0; j < 3; j++) {
      var pos = [i, j];
      if ( this.board.isEmptyAt(pos) ) {
        var clone = this.board.cloneBoard();
        clone.placeMark(pos);
        children.push(new TicTacToeNode(clone, pos) );
      }
    }
  }
  return children;
};

TicTacToeNode.prototype.isLosingNode = function (evaluator) {
  if ( this.board.isOver() ) {
    return (this.board.isWon() && this.board.winner() !== evaluator);
  }

  var children = this.children();
  if (this.board.turn === evaluator) {
    // if it's evaluator's turn, all of the children need to be losers
    for (var i = 0; i < children.length; i++) {
      if (!children[i].isLosingNode(evaluator) ) {return false;}
    }
    return true;
  } else {
    // if it's the opponent's turn, can any of their moves lead to a loss?
    for (var j = 0; j < children.length; j++) {
      if (children[j].isLosingNode(evaluator) ) {return true;}
    }
    return false;
  }
};

TicTacToeNode.prototype.isWinningNode = function (evaluator) {
  if ( this.board.isOver() ) {return this.board.winner() === evaluator;}

  var children = this.children();
  if (this.board.turn === evaluator){
    // If we can place any mark and eventually proceed to force a
    // win, then this is a winning node.
    for (var i = 0; i < children.length; i++) {
      if (children[i].isWinningNode(evaluator) ) {return true;}
    }
    return false;
  } else {
  // If it's the opponent's turn, and no matter where they move
  // we'll still be able to force a win, then this is a winning node
    for (var j = 0; j < children.length; j++) {
      if ( !children[j].isWinningNode(evaluator) ) {return false;}
    }
    return true;
  }

};

module.exports = TicTacToeNode;
