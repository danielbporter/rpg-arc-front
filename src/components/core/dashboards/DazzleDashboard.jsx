import React, { Component } from 'react';
import Dazzle from 'react-dazzle';


function makePlaceholderWidget(width, height) {
  const imgURL = `http://placehold.it/${width}x${height}`;
  return () =>
    <div border="2px solid black">
      <img src={imgURL} alt="widget placeholder" />
    </div>;
}

class DazzleDashboard extends Component {
  render() {
    // const widgets = this.getTestWidgets();

    const widgets = {
      uno: {
        type: makePlaceholderWidget(300, 300),
      },
      dos: {
        type: makePlaceholderWidget(300, 600),
      },
      tres: {
        type: makePlaceholderWidget(300, 300),
      },
    };

    const layout = {
      rows: [
        {
          columns: [
            {
              widgets: [
                {
                  key: 'uno',
                },
              ],
            },
            {
              widgets: [
                {
                  key: 'tres',
                },
              ],
            },
          ],
        },
        {
          columns: [
            {
              widgets: [
                {
                  key: 'dos',
                },
              ],
            },
          ],
        },
      ],
    };

    const dazzleAttrs = {
      widgets,
      layout,
      editable: true,
    };

    return (
      <Dazzle {...dazzleAttrs} />
    );
  }
}

export default DazzleDashboard;
