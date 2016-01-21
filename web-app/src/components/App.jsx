import React from 'react';

import Navbar from './Navbar';
import Dashboard from './Dashboard';

// import {
//   // lightRawTheme,
//   getMuiTheme,
// } from 'material-ui/lib/styles';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
    // this.state = { muiTheme: getMuiTheme() };
  // }

  // getChildContext() {
  //   return {
  //     muiTheme: this.state.muiTheme,
  //   };
  // }

  render() {
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
  }
}

// App.childContextTypes = {
//   muiTheme: React.PropTypes.object,
// };

export default App;
