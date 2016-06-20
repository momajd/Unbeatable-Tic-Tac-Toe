var React = require('react');

var Tile = React.createClass({

  handleClick: function () {
    if (this.props.mark) {return;}
    // updating the board will trigger re-render
    this.props.updateBoard(this.props.position);
  },

  render: function() {
    var mark;
    if (this.props.mark === "x") {
      mark = <i className='fa fa-times fa-5x' aria-hidden='true'></i> ;
    } else if (this.props.mark === "o") {
      mark = <i className="fa fa-circle-o fa-5x" aria-hidden="true"></i> ;
    }

    var klass = this.props.mark ? "tile-marked" : "tile-unmarked";
    return (
      <div className={klass} onClick={this.handleClick}>
        {mark}
      </div>
    );
  }

});

module.exports = Tile;
