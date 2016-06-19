var React = require('react');

var Tile = React.createClass({

  handleClick: function () {
    if (this.props.mark) {return;}
    // updating the board will trigger re-render
    this.props.updateBoard(this.props.position);
  },

  render: function() {
    var klass = this.props.mark ? "tile-marked" : "tile-unmarked";
    return (
      <div className={klass} onClick={this.handleClick}>{this.props.mark}</div>
    );
  }

});

module.exports = Tile;
