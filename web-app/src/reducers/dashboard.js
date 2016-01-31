import React from 'react';
// import Widget from '../components/widget-core/Widget';
import { Map } from 'immutable';
import { NEW_WIDGET, REMOVE_WIDGET, MOVE_WIDGET } from '../constants/ActionTypes';

const initialState = Map({ 1:
  Map({ x: 100, y: 100, content:
    <img src="http://placehold.it/350x300" />,
  }),
});


// notes for example state tree
// dashboard.widgets = [{
//     widgetId: 1,
//     x: 50,
//     y: 180,
// },]
//
// 
//
// 

// { newWidget, removeWidget, moveWidget }

function newWidget(state, action) {
  return state;
}

function removeWidget(state, action) {
  return state;
}

function moveWidget(state, action) {
  return state.update(action.widgetId, (widget) => {
    return {
      x: action.newX,
      y: action.newY,
      content: widget.content,
    };
  });
}

export default function dashboard(state = initialState, action) {
  if (action === undefined) {
    return state;
  }

  // console.log(state.toString());

  switch (action.type) {
    case NEW_WIDGET:
      return newWidget(state, action);
    case REMOVE_WIDGET:
      return removeWidget(state, action);
    case MOVE_WIDGET:
      return moveWidget(state, action);
    default:
      return state;
  }
}
