import React, { Component } from 'react';
import { SearchPanel } from '../searchPanel/searchPanel';
import { SearchResultsContainer } from '../outputContainer/outputContainer';

export class PageHeader extends Component {
  render() {
    return (
      <header>
        <div className='header'>
          <div className='container'>
            <h1 className='logo'>netflixroulette</h1>
            <SearchPanel />
          </div>
        </div>
        <SearchResultsContainer />
      </header>
    );
  }
}
