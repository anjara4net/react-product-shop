var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var LeadCapture = React.createClass({
    onSubmit: function(e) {
      if(!this.refs.fieldEmail.state.valid) {
          alert("Enter valid entry first");
      } else {
          var httpRequestBody={
            email: this.refs.fieldEmail.state.value,
            firstName: this.refs.fieldName.state.value
          };
          this.refs.fieldName.clear();
          this.refs.fieldEmail.clear();
          this.setState({"success":true});
      }
    },
    getInitialState: function() {
      return {"success": false};
    },
    render: function() {
      var successMsg = {
        color: "green",
        visibility: this.state.success ? "visible":"hidden"
      }
      return (
          <div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h1>Contact us</h1>
              </div>
              <div className="panel-body">
                  <NameField type="First Name" ref="fieldName" />
                  <br/>
                  <EmailField ref="fieldEmail" />
                  <div className="row">
                    <div className="col-sm-4">
                      <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                    </div>
                    <div className="col-sm-8">
                        <h5 style={successMsg}>We will contact you soon!</h5>
                    </div>
                  </div>
              </div>
            </div>
          </div>
      );
    }
});
module.exports = LeadCapture;
