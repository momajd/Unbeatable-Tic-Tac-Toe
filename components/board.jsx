var React = require('react');
var Tile = require('./tile');

var Game = React.createClass({

  render: function() {
    var tiles = [];

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        tiles.push(
          <Tile
            key={3*i + j}
            position={[i, j]}
            board={this.props.board}
            updateBoard={this.props.updateBoard}
            />);
      }
    }

    return (
      <div className='board'>{tiles}</div>
    );
  }

});

module.exports = Game;
