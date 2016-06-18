var React = require('react');

var Tile = React.createClass({

  getInitialState: function() {
    return {
      mark: ""
    };
  },

  handleClick: function () {
    if (this.props.board.turn === "x") {
      this.state.mark = "x";
    } else {
      this.state.mark = "o";
    }
    // updating the board will trigger re-render
    this.props.updateBoard(this.props.position);
  },

  render: function() {
    return (
      <div className="tile" onClick={this.handleClick}>{this.state.mark}</div>
    );
  }

});

module.exports = Tile;
