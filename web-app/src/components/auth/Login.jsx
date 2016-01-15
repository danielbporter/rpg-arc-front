import React from 'react';
import {Link} from 'react-router'

class Login extends React.Component {

  render() {
    return (
      <div>
          <h1>this is the login page</h1>
          <Link to="/">Main App</Link>
        </div>
    );
  }
}


export default Login;