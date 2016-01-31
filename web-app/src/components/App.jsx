import React from 'react';

import Navbar from './Navbar';
import Dashboard from './Dashboard';
// import Widget from './Widget';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="mainPanel">
          <Dashboard>
            <img src="http://placehold.it/350x300" alt="placeholder"/>
          </Dashboard>
        </div>
      </div>
    );
  }
}

export default App;
