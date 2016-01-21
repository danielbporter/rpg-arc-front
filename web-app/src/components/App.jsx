import React from 'react';

import Navbar from './Navbar';
import Dashboard from './Dashboard';

class App extends React.Component {
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

export default App;
