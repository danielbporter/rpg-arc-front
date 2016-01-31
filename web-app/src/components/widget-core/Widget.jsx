import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import { WIDGET } from '../../constants/DragTypes';

const dragSpec = {
  // callbacks for dnd events
  beginDrag() {
    // beginDrag is required
    return {};
  },
};

function collect(connect, monitor) {
  // collect functions and data from connect and monitor
  // to insert into Widget as props
  // propName: whatToInsert
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
  };
}

class Widget extends Component {
  renderTitleBar() {
    return (
      <div className="widget-bar">
        Drag From Here
      </div>
    );
  }

  render() {
    const { key, children, x, y, connectDragPreview, connectDragSource } = this.props;
    return connectDragPreview(
      <div key={key} className="widget mdl-shadow--2dp" style={{ left: x, top: y }}>
        {connectDragSource(this.renderTitleBar())}
        {children}
      </div>
    );
  }
}

Widget.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  key: PropTypes.number.isRequired,
};

// Widget.propTypes = {
//   children: React.PropTypes.Component,
//   isDragging: React.PropTypes.bool.isRequired,
//   connectDragSource: React.PropTypes.func.isRequired,
// };

// export default dragSource(WIDGET, dndCardSource, collect)(Widget);
export default DragSource(WIDGET, dragSpec, collect)(Widget);
