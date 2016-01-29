import React from 'react';
import auth from './../auth';

class Login extends React.Component {

    componentDidMount(){
        auth.login();
    }

  render(){
    return (
            <div id="lock-container"></div>

    );
  }
}

export default Login;