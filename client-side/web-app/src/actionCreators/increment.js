import { INCREMENT_COUNTER } from '../constants/ActionTypes';

export default function increment(i = 1) {
  return { type: INCREMENT_COUNTER, i };
}
