import React, {PropTypes} from 'react';
//import { connect } from 'react-redux'
import Navbar from './Navbar';
import Dashboard from './Dashboard';
//import Login from './Login';
import auth from './../auth'

class App extends React.Component {
   constructor(props) {
     super(props);
   }
    /*
    showLock(){
        this.state.lock.show()
    }
    getIdToken() {
        var idToken = localStorage.getItem('userToken');
        var authHash = this.props.lock.parseHash(window.location.hash);
        if (!idToken && authHash)
        {
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
    }*/

    render() {
      return (
          <div>
          <Navbar />
          <Dashboard />
          </div>
      );

    }

}

export default App
