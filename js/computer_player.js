var TicTacToeNode = require('./tic_tac_toe_node');

var ComputerPlayer = function (mark) {
  this.mark = mark;
};

ComputerPlayer.prototype.move = function (board) {
  var node = new TicTacToeNode(board);

  // shuffle the children so AI doesn't pick same move every time
  var possibleMoves = node.children().shuffle();

  // select a move that will lead to a definite win, if one is available
  for (let i = 0; i < possibleMoves.length; i++) {
    let move = possibleMoves[i];
    if (move.isWinningNode(this.mark) ) {return move.prevMoverPos;}
  }

  // if none available, select a move that won't lead to a loss
  for (let i = 0; i < possibleMoves.length; i++) {
    let move = possibleMoves[i];
    if (!move.isLosingNode(this.mark) ) {return move.prevMoverPos;}
  }
};

Array.prototype.shuffle = function () {
  var currentIdx = this.length, temp, randomIdx;

  while (currentIdx > 0) {
    randomIdx = Math.floor(Math.random() * currentIdx );
    currentIdx -= 1;

    temp = this[currentIdx];
    this[currentIdx] = this[randomIdx];
    this[randomIdx]  = temp;
  }
  return this;
};

module.exports = ComputerPlayer;
