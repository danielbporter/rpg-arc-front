import { Map } from 'immutable';
import { CHANGE_RANFILTRATOR_FILTER } from '../actions/ActionTypes';

const initialState = Map({
  genre: 'any',
  genres: [
    {
      value: 'any',
      label: 'Any',
    },
    {
      value: 'sci-fi',
      label: 'Science Fiction',
    },
    {
      value: 'fantasy',
      label: 'Fantasy',
    },
  ],
});

export default function reducer(state = initialState, action) {
  if (action === undefined) {
    return state;
  }

  console.log('in reducer.');
  console.log(action);
  console.log(state);

  if (action === CHANGE_RANFILTRATOR_FILTER) {
    state.set(action.field, action.value);
    return state;
  }

  return state;
}
