import { combineReducers } from 'redux';
import ui from './ui';
import diceWidget from './diceWidget';

const rootReducer = combineReducers({
  ui,
  diceWidget,
});

export default rootReducer;
