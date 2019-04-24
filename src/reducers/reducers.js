import { REHYDRATE } from 'redux-persist';
import { ACTION } from '../store/constants';

export const movies = (state = defaultState, { type, movies = [], total = 0, offset = 0, limit = 0 }) => {
  switch (type) {
    case ACTION.DATA_RETRIVED:
      return {
        records: movies,
        total,
        offset,
        limit,
      };
    default:
      return state;
  }
};

export const persistReducer = (state = {}, action) => {
  switch (action.type) {
    case REHYDRATE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export const filterSearch = (state = 'title', { type, name }) => {
  switch (type) {
    case ACTION.FILTER_TYPE_SETTED:
      return name;
    default:
      return state;
  }
};

export const search = (state = '', { type, value }) => {
  switch (type) {
    case ACTION.FILTERED:
      return value;
    default:
      return state;
  }
};

export const searchBy = (state = 'rating', { type, typeName }) => {
  switch (type) {
    case ACTION.SORTED:
      return typeName;
    default:
      return state;
  }
};

const defaultState = {
  records: [],
  total: 0,
  offset: 0,
  limit: 10,
};

