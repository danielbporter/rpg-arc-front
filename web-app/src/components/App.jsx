import React from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
//import Home from './Home'

// import {
//   // lightRawTheme,
//   getMuiTheme,
// } from 'material-ui/lib/styles';

class App extends React.Component {
   constructor(props) {
     super(props);
     this.state = {lock:props.lock, idToken:this.getIdToken()};
   }

    showLock(){
        this.state.lock.show()
    }

    getIdToken() {
        var idToken = localStorage.getItem('userToken');
        var authHash = this.props.lock.parseHash(window.location.hash);
        if (!idToken && authHash) {
        if (authHash.id_token) {
            idToken = authHash.id_token;
            localStorage.setItem('userToken', authHash.id_token);
            }
        if (authHash.error) {
            console.log("Error signing in", authHash);
            return null;
            }
        }
        window.location.href = '/#';
        return idToken;
  }

    render() {
    if (this.state.idToken) {
      return (
        <div>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="mainPanel">
          <Dashboard />
        </div>
      </div>

      );
    } else {
      return (
          <div className="login-box">
             <a onClick={this.showLock.bind(this)}>Sign In</a>
          </div>
      );
    }
  }
}

App.propTypes = {lock:React.PropTypes.object, idToken:React.PropTypes.string};
App.defaultProps = {lock:new Auth0Lock('ICf6JzrB6yHqkaSWFzJN1sAWwUINpbvJ', 'cyve.auth0.com')};

export default App;
