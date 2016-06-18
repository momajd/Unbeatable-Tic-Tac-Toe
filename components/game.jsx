var React = require('react');
var Board = require('./board');

var Game = React.createClass({

  getInitialState: function() {
    return {
      player: "x"
    };
  },

  render: function() {

    return (
      <div><Board player={this.state.player}/></div>
    );
  }

});

module.exports = Game;
