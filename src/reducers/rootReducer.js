import { combineReducers } from 'redux';
import { movies, search, filterSearch, searchBy, persistReducer} from './reducers';

export const rootReducer = combineReducers({
  movies,
  filterSearch,
  search,
  searchBy,
  persistReducer,
});

