import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggle } from '../toggle/toggle';
import { setSortingBy } from '../../actions/actions';
import { SEARCHING_OPTIONS, MOVIE_PARAMS } from '../../store/constants';


export class SearchResults extends Component {
  setSortingByHandler = (typeName) => {
    this.props.setSortingBy(typeName);
  }

  render() {
    return (
      <div className='search-results'>
        <div className='search-results__found'>
          {this.props.totalMovies} movies found
        </div>
        <div className='search-results__sorting'>
          <div className='search-results__sorting-header'>Sort by</div>
          <toggle
            options={['release date', 'rating']}
            default={this.props.searchBy}
            isLight={true}
            onChange={this.setSortingByHandler.bind(this)}/>
        </div>
      </div>
    );
  }
}

const props = (state) => {
  let searchBy = '';

  switch (state.searchBy) {
    case MOVIE_PARAMS.RELEASE_DATE:
      searchBy = SEARCHING_OPTIONS.RELEASE_DATE;
      break;
    case MOVIE_PARAMS.RATING:
      searchBy = SEARCHING_OPTIONS.RATING;
      break;
  }

  return {
    totalMovies: state.movies.total,
    searchBy,
  };
};

const propsRetrieved = (dispatch) => ({
  setSortingBy: (typeName) => {
    let fieldName = '';

    switch (typeName) {
      case SEARCHING_OPTIONS.RELEASE_DATE:
        fieldName = MOVIE_PARAMS.RELEASE_DATE;
        break;
      case SEARCHING_OPTIONS.RATING:
        fieldName = MOVIE_PARAMS.RATING;
        break;
    }
    dispatch(setSortingBy(fieldName));
  },
});

export const SearchResultsContainer = connect(props, propsRetrieved)(SearchResults);
