import React from 'react';
// import DiceWidget from './DiceWidget';
import Widget from './widget-core/Widget';

class Dashboard extends React.Component {
  getStyles() {
    return {
      position: 'absolute',
      // top: 100,
      // left: 100,
    };
  }
  render() {
    return (
      <div style={this.getStyles()}>
        <Widget>
          <img src="http://placehold.it/350x300" />
        </Widget>
        <Widget>
          <img src="http://placehold.it/350x300" />
        </Widget>
        <Widget />
      </div>
    );
  }
}

export default Dashboard;
