import React from 'react';
// import React, { PropTypes } from 'react';
// import { connect } from 'react-redux'
import Navbar from './Navbar';
// import Footer from './Footer'
// import Dashboard from './dashboards/Dashboard';
// import Login from './Login';
// import auth from '../../auth'

class App extends React.Component {

  getStyles() {
    return {
      minHeight: '100%',
    };
  }

  getStyleBody() {
    return {
      padding: 10,
    };
  }


    render() {
      return (
        <div style={this.getStyles()}>
          <Navbar/>
          <div style={this.getStyleBody()}>
            {this.props.children}
          </div>
        </div>
      );
    }
}

export default App;
