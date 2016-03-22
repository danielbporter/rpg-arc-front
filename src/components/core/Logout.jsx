import React from 'react';
import auth from './../../../rpg-arc-front/src/auth'

class Logout extends React.Component {

  componentDidMount(){
        auth.logout();
    }

  render(){
    return (
        <div>
            <h1>You have logged out</h1>
      </div>
    );
  }
}

export default Logout;