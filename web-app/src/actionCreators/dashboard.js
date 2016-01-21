import { NEW_WIDGET, REMOVE_WIDGET, MOVE_WIDGET } from '../constants/ActionTypes';

function newWidget() {
  console.log('reducers/dashboard/newWidget is not yet implemented!');
  return { type: NEW_WIDGET };
}

function removeWidget() {
  console.log('reducers/dashboard/removeWidget is not yet implemented!');
  return { type: REMOVE_WIDGET };
}

function moveWidget(widgetId, newX, newY) {
  return {
    type: MOVE_WIDGET,
    widgetId,
    newX,
    newY,
  };
}

export { newWidget, removeWidget, moveWidget };
