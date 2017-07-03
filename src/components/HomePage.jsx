var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var HomePage = React.createClass({
  render: function() {
    return (
      <div>
          <h1>Home Page</h1>
          <br />
          <br />
          <h3>Sitemap</h3>
          <ul>
              <li>
                  <Link to="/">Home</Link>
                  <ul>
                    <li><Link to="/product/product">Product</Link></li>
                    <li><Link to="/product/aboutus">About Us</Link></li>
                  </ul>
              </li>
          </ul>
      </div>
    );
  }
});
module.exports = HomePage;
