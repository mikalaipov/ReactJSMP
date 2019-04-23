import { ACTION } from 'Common/constants';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  films,
  search,
});

export const search = (state = '', { type, value }) => {
  switch (type) {
    case ACTION.FILTERED:
      return value;
    default:
      return state;
  }
};