import { Map as newMap, List as newList } from 'immutable';
import { DICE_ROLL, RESET_ROLL } from '../constants/ActionTypes';

const initialState = newMap({
  total: 0,
  history: newList(),
});

export default function diceWidgetReducer(state = initialState, action) {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case DICE_ROLL:
      return state
        .update('total', (v) => v + action.roll) // increment total
        .update('history', (l) => l.push(action.dice, action.roll)); // append [dice, roll]
    case RESET_ROLL:
      return initialState;
    default:
      return state;
  }
}
