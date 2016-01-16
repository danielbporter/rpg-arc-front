import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

class Login extends React.Component {

  render() {
    return (
      <div className="mdl-card mdl-shadow--4dp center">
          <div className="mdl-card__title">
               <h3>Please Login</h3>
            </div>
        <div className="mdl-card__supporting-text">
          <TextField
            hintText="Email"
            floatingLabelText="Email"
            type="email" />
          <br/>
        <TextField
            hintText="Password"
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

export default Login;