import { CHANGE_RANFILTRATOR_FILTER } from './ActionTypes';

function changeRanfiltratorFilters(field, value) {
  return {
    type: CHANGE_RANFILTRATOR_FILTER,
    field,
    value,
  };
}

export { changeRanfiltratorFilters };
