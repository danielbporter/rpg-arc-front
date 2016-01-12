import React from 'react';
import DiceWidget from './DiceWidget';

class Dashboard extends React.Component {
  getStyles() {
    return {
      position: 'relative',
      // top: 100,
      // left: 100,
    };
  }
  render() {
    return (
      <div style={this.getStyles()}>
        <DiceWidget />
      </div>
    );
  }
}

export default Dashboard;
