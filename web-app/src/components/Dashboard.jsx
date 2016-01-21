import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { WIDGET } from '../constants/DragTypes';
import Widget from './widget-core/Widget';
import { dragWidget } from '../actionCreators/dashboard';
import { Map } from 'immutable';

function mapStateToProps(state) {
  return {
    dashboard: state.dashboard,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    widgetDrag: (widgetId, newX, newY) => dispatch(dragWidget(widgetId, newX, newY)),
  };
}

const dropTargetSpec = {
  // drop(props, monitor, component) {

  // },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}

// Put widgets in props.children and demand all children have unique widgetIds
//     widgetId can come from store/reducer/whatever?
// widgetIds could be assigned by dashboard's componentWillMount?
// store has layout info { widgetId: wid, x: 300, y: 500, width/height? } or id: {...}?
// instead of rendering children with {props.children}, have some custom method which 
// uses specialized ordering

// widgetIds through higher order component???!?!?
// or mapStateToProps when they register individual widget
// (in Widget?)
// Widget.mapStateToProps... versus 

// or WidgetChild...?

class Dashboard extends Component {
  renderWidget(widgetInfo) {
    console.log(widgetInfo.toString());
    console.log(widgetInfo.content.toString());
    return (
      <Widget x={widgetInfo.x} y={widgetInfo.y}>
        {widgetInfo.content}
      </Widget>
    );
  }

  render() {
    const { connectDropTarget, dashboard } = this.props;
    return connectDropTarget(
      <div className="dashboard">
        {dashboard.valueSeq().map(this.renderWidget)}
      </div>
    );
  }
}

// <Widget>
//   <img src="http://placehold.it/350x300" />
// </Widget>

Dashboard.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  dashboard: PropTypes.instanceOf(Map).isRequired,
  widgetDrag: PropTypes.func.isRequired,
};

export default
  connect(mapStateToProps, mapDispatchToProps)(
  DragDropContext(HTML5Backend)(
  DropTarget(WIDGET, dropTargetSpec, collect)(Dashboard)
));
