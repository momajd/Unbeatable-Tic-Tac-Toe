var React = require('react');
var Tile = require('./tile');

var Game = React.createClass({

  render: function() {
    var row = [];

    for (var i = 0; i < 3; i++) {
      row.push(<Tile key={i}/>);
    }

    return (
      <div>{row}</div>
    );
  }

});

module.exports = Game;
