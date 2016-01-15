import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

class Registration extends React.Component {

  render() {
    return (
      <div className="mdl-card mdl-shadow--4dp center">
          <div className="mdl-card__title">
               <h3>Registration</h3>
            </div>
        <div className="mdl-card__supporting-text">
          <TextField
            hintText="First Name"
            floatingLabelText="First Name"
            type="text" />
          <br/>
          <TextField
            hintText="Last Name"
            floatingLabelText="Last Name"
            type="text" />
          <br/>
          <TextField
            hintText="Email"
            floatingLabelText="Email"
            type="text" />
          <br/>
        <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            type="password" />
          <br/>
            <br/>
         <RaisedButton label="Primary" primary={true} />
        </div>
      </div>
    );
  }
}

export default Registration;