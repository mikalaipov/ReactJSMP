import React, {Component} from 'react';
import {ticket} from '../Toggle/Toggle';
import {connect} from 'react-redux';
import {retriveMovieInfo} from '../../actions/actions';

export class Movie extends Component {
  constructor(props) {
    super(props);
 }

  componentDidMount() {
    if (!this.props.movies || this.props.movies.length === 0) {
      this.props.fetchData();
   }
 }

  render() {
    if (this.props.hasErrored) {
      return <h1>Ooops, there is an error</h1>;
   }

    if (this.props.isLoading) {
      return <span>loading...</span>;
   }

    return (
      <div className='Main'>
        {this.props.movies.records.map((movie) => (
          <ticket key={movie.id} movieResult={movie} />
        ))}
      </div>
    );
 }
}

const props = (state) => ({
  movies: state.movies
});

const propsRetrieved = (dispatch) => ({
  fetchData: () => dispatch(retriveMovieInfo()),
});

export const Main = connect(props, propsRetrieved)(Movie);
