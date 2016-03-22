  import React from 'react';

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
        {this.props.children}
      </div>
    );
  }
}

export default Dashboard;
