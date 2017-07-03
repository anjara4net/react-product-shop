var React = require('react');

var ProductPage = React.createClass({
  getInitialState: function(){
    return {"pid":""};
  },
  componentDidMount: function(){
    this.setState({"pid": this.props.params.productId});
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({"pid": nextProps.params.productId});
  },
  render: function() {
    return (
        <h1>This is "{this.state.pid}" page</h1>
    );
  }
});
module.exports = ProductPage;
