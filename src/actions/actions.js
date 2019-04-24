import {ACTION, SOURCE} from '../store/constants';

export const retriveMovieInfo = (params) => (
  (dispatch) => {
    let paramsString = '?';
    if (params) {
      const {sortBy, sortOrder, search, searchBy} = params;
      if (search) paramsString += `search=${search}&`;
      if (searchBy) paramsString += `searchBy=${searchBy}&`;
      if (sortBy) paramsString += `sortBy=${sortBy}&`;
      if (sortOrder) paramsString += `sortOrder=${sortOrder}&`;      
   }

    fetch(SOURCE.RETRIEVE_DATE + encodeURI(paramsString)).then((response) => response.json()).then((response) => {
          dispatch(retriveMovieInfoSuccess(response));
       })
 }
);

export const setSearchType = (name) => ({
  type: ACTION.FILTER_TYPE_SETTED,
  name,
});

export const setSearchString = (value) => ({
  type: ACTION.FILTERED,
  value,
});

export const setSortingBy = (typeName) => ({
  type: ACTION.SORTED,
  typeName,
});

export const retriveMovieInfoSuccess = ({data, total, offset, limit}) => ({
  type: ACTION.DATA_RETRIVED,
  movies: data,
  total,
  offset,
  limit,
});