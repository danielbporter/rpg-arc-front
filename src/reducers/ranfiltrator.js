import { fromJS } from 'immutable';
import { CHANGE_RANFILTRATOR_FILTER } from '../actions/ActionTypes';

const initialState = fromJS({
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

  // console.log('Action received by reducer:');
  // console.log(action);
  // console.log(state);

  if (action.type === CHANGE_RANFILTRATOR_FILTER) {
    // console.log('Change ran. state.');
    return state.set(action.field, action.value);
    // console.log('after update.');
    // console.log(state.toString());
    // return state;
  }

  return state;
}
