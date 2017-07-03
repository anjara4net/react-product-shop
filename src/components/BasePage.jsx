var React = require('react');
var NavBar = require('../components/nav/NavBar.jsx');
var LeadCapture = require('../components/forms/LeadCapture.jsx');

var navLinks = [
                {
                  title: "Home",
                  href: "/"
                },
                {
                  title: "Product",
                  href: "/product/product"
                },
                {
                  title: "About us",
                  href: "/product/aboutus"
                }
              ];

var BasePage = React.createClass({
  render: function() {
    return (
        <div>
          <NavBar navData={navLinks}/>
          <div className="container">
              <div className="row">
                <div className="col-sm-9">
                  {this.props.children}
                </div>
                <div className="col-sm-3">
                  <LeadCapture />
                </div>
              </div>
          </div>
        </div>
    );
  }
});
module.exports = BasePage;
