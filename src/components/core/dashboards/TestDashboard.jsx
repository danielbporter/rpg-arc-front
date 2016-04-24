import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';

class TestDashboard extends Component {
  getDivStyle() {
    return {
      border: 'black solid 1px',
    };
  }

  getRGLSettings(gridUnitSize, maxWidth) {
    // use double bitwise NOT to "force" integer division results
    const cols = ~~(maxWidth / gridUnitSize);
    const width = cols * gridUnitSize;
    return {
      cols,
      width,
      rowHeight: gridUnitSize,
      verticalCompact: false,

    };
  }

  render() {
    const layout = [
      { i: 'a', x: 0, y: 0, w: 1, h: 1 },
      { i: 'b', x: 1, y: 0, w: 1, h: 1 },
      { i: 'c', x: 3, y: 1, w: 1, h: 1 },
    ];

    const divStyle = this.getDivStyle();
    const rglSettings = this.getRGLSettings(50, 800);

    return (
      <ReactGridLayout layout={layout} {...rglSettings}>
        <div key={'a'} style={divStyle}>A</div>
        <div key={'b'} style={divStyle}>B</div>
        <div key={'c'} style={divStyle}>C</div>
      </ReactGridLayout>
    );
  }
}

export default TestDashboard;
