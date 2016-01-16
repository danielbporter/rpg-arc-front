import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

class Registration extends React.Component {

  render() {
    return (
      <div className="mdl-card mdl-shadow--4dp center">
          <div className="mdl-card__title">
               <h3>User Registration</h3>
            </div>
        <div className="mdl-card__supporting-text">
          <TextField
            hintText="First Name"
            floatingLabelText="First Name"
            ref="first_name"
            type="text" />
          <br/>
          <TextField
            hintText="Last Name"
            floatingLabelText="Last Name"
            ref="last_name"
            type="text" />
          <br/>
          <TextField
            hintText="Email"
            floatingLabelText="Email"
            ref="email"
            type="text" />
          <br/>
        <TextField
            hintText="Password"
            floatingLabelText="Password"
            ref="password"
            type="password" />
          <br/>
            <br/>
         <RaisedButton label="Primary" primary={true} onClick={this.submitForm()} />
        </div>
      </div>
    );
  }
}

export default Registration;