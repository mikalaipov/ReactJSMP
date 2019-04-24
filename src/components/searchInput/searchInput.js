import React, { Component } from 'reacte_modules/react';
import { Button } from '../button/button';
import { toggle } from '../toggle/toggle';
import { connect } from 'react-reduxles/react-redux';
import { retriveMovieInfo, setSearchType, setSearchString } from '../../actions/actions';

export class SearchInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='search-input'>
        <div className='input'>
          <span className='input__icon'>&#8629;</span>
          <input className='input__text' type='text' onInput={this.inputHandler.bind(this)} defaultValue={this.props.search} />
        </div>
        <div className='search-input__controls'>
          <span className='search-input__text'>
            Search by
          </span>
          <div className='search-input__toggle'>
            <toggle options={['title', 'genre']} default='title' onChange={this.typeChangeHandler.bind(this)} />
          </div>
          <div className='search-input__submit'>
            <Button text='Search' isActive={true} width='100px' onClick={this.onSubmit.bind(this)} />
          </div>
        </div>
      </div>
    );
  };

  typeChangeHandler = (str) => {
    this.props.setSearchType(str);
  };

  inputHandler = (e) => {
    this.props.setSearchValue(e.target.value);
  }

  onSubmit = () => {
    this.props.fetchData({
      search: this.props.search,
      filterSearch: this.props.filterSearch,
      searchBy: this.props.searchBy,
      sortOrder: 'asc',
    });
  }

}

const props = (state) => ({
  search: state.search,
  filterSearch: state.filterSearch,
  searchBy: state.searchBy,
});

const propsRetrieved = (dispatch) => ({
  setSearchType: (typeName) => dispatch(setSearchType(typeName)),
  setSearchValue: (value) => dispatch(setSearchString(value)),
  fetchData: (params) => dispatch(retriveMovieInfo(params)),
});

export const Input = connect(props, propsRetrieved)(SearchInput);
