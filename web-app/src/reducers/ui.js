import { Map as newMap } from 'immutable';

import { INCREMENT_COUNTER } from '../constants/ActionTypes';

const initialState = newMap({
  homeClickCounter: 0,
  sidebarWidth: 80,
});

export default function ui(state = initialState, action) {
  if (action === undefined) {
    // console.log(state.toString());
    return state;
  }

  // console.log(state.toString());

  switch (action.type) {
    case INCREMENT_COUNTER:
      return state.set('homeClickCounter', state.get('homeClickCounter') + action.i);
    default:
      return state;
  }
}
