import { combineReducers } from 'redux';
import ui from './ui';
import diceWidget from './diceWidget';
import dashboard from './dashboard';

const rootReducer = combineReducers({
  ui,
  diceWidget,
  dashboard,
});

export default rootReducer;
