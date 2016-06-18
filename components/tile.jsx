var React = require('react');

var Tile = React.createClass({

  getInitialState: function() {
    return {
      mark: ""
    };
  },

  handleClick: function () {
    // console.log(this.props.position);
    this.setState({mark: this.props.player});
  },

  render: function() {
    return (
      <div className="tile" onClick={this.handleClick}>{this.state.mark}</div>
    );
  }

});

module.exports = Tile;
