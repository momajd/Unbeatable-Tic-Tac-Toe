var Player = require('./player');
var ComputerPlayer = require('./computer_player');

var Board = function (player1, player2, turn) {
  this.player1 = player1 ? player1 : new Player("x");
  this.player2 = player2 ? player2 : new ComputerPlayer("o");

  // turn must be passed in when we create all of the children boards for AI
  this.turn = turn ? turn : this.player1.mark;
  this.rows = [ Array(3).fill(null), Array(3).fill(null), Array(3).fill(null)];
};

Board.prototype.placeMark = function (pos) {
  var row = pos[0], col = pos[1];
  this.rows[row][col] = this.turn;
  this.turn = this.turn === this.player1.mark ? this.player2.mark : this.player1.mark;
};

Board.prototype.markAt = function(pos) {
  var row = pos[0], col = pos[1];
  return this.rows[row][col];
};

Board.prototype.columns = function () {
  var cols = [];
  for (var i = 0; i < 3; i++) {
    var col = [];
    for (var j = 0; j < 3; j++) {
      col.push(this.rows[j][i]);
    }
    cols.push(col);
  }
  return cols;
};

Board.prototype.diagonals = function () {
  var topLeft = [[0, 0], [1, 1], [2, 2]];
  var topRight = [[0, 2], [1, 1], [2, 0]];

  var diags = [];
  diags.push(topLeft.map(function(pos) {return this.markAt(pos); }, this));
  diags.push(topRight.map(function(pos) {return this.markAt(pos); }, this));
  return diags;
};

Board.prototype.winner = function () {
  var triples = this.rows.concat(this.columns(), this.diagonals());
  var mark1 = this.player1.mark, mark2 = this.player2.mark;

  for (var i = 0; i < triples.length; i++) {
    if ( triples[i].isEqualTo([mark1, mark1, mark1]) ) {
      return this.player1.mark;
    } else if ( triples[i].isEqualTo([mark2, mark2, mark2]) ) {
      return this.player2.mark;
    }
  }
};

Board.prototype.isWon = function () {
  return Boolean(this.winner());
};

Board.prototype.isTie = function () {
  if (this.winner()) {return false;}

  var flattened = this.rows.reduce(function (a, b) {return a.concat(b); });
  for (var i = 0; i < flattened.length; i++) {
    if (flattened[i] === null) {return false;}
  }
  return true;
};

Board.prototype.isOver = function () {
  return Boolean(this.isWon() || this.isTie() );
};

Board.prototype.isEmptyAt = function (pos) {
  return !this.markAt(pos);
};

Board.prototype.cloneBoard = function () {
  var clone = new Board(this.player1, this.player2, this.turn);

  clone.rows = this.rows.map(function(row) {
    return row.slice(0);
  });
  return clone;
};

Board.prototype.printRows = function () {
  this.rows.forEach(function(row) {
    console.log(row);
  });
};

// Arrays cannot be compared with '===' in JS
Array.prototype.isEqualTo = function (array2) {
  if (this.length !== array2.length) {return false;}

  // we don't need to worry about checking nested arrays
  for (var i = 0; i < this.length; i++) {
    if (this[i] !== array2[i]) {return false;}
  }
  return true;
};

module.exports = Board;
