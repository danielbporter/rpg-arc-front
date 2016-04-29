import React from 'react';
import auth from '../../auth';

class Login extends React.Component {

    componentDidMount()
    {
        if(auth.loggedIn()==true)
        {
            window.location.href = '/#/dashboard';
        }
        else {
            auth.login();
        }
    }

    getStyle(){
        return {
            width: '200',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    }

  render(){
    return (
            <div id="lock-container"></div>

    );
  }
}

export default Login;