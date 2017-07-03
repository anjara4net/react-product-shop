var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var NavItem = React.createClass({
    getInitialState: function(){
      return {hover: false};
    },
    mouseOver: function(e) {
      this.setState({hover: true});
    },
    mouseOut: function(e) {
      this.setState({hover: false});
    },
    render: function() {
      return (
        <li onMouseOut={this.mouseOut} onMouseOver={this.mouseOver} className={this.state.hover ? "active" : ""}>
          <Link to={this.props.href}>{this.props.title}</Link>
        </li>
      );
    }
}) ;
module.exports = NavItem;
