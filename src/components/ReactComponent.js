import React, { Component } from 'react';
export class ReactComponent extends Component {
  render() {
    return (<div className="wrapper">
      <div className="header">
        <div className="rouletteLabel">netflixroulette</div>
        <div className="findLabel">FIND YOUR MOVIE</div>
        <div className="inputField">
          <input type="search" className="siteSearch" name="q" aria-label="Search through site content"></input>
          <button type="submit" className="arrowButton"></button>
        </div>
        <div className="searchPanel">
          <div className="searchTitleGenre">
            <div className="searchLabel">SEARCH BY</div>
            <button className="titleButton">TITLE</button>
            <button className="genreButton">GENRE</button>
          </div>
          <button className="searchButton">SEARCH</button>
        </div>
      </div>

      <div className="sortPanel">
        <div className="foundLabel">7 movie found</div>
        <div className="sortByLabel">Sort by</div>
        <button className="releaseButton">release date</button>
        <button className="ratingButton">rating</button>
      </div>

      <article className="main">
        <div className="notFoundLabel">No films found</div>
      </article>

      <div className="footer">
        <div className="rouletteLabel">netflixroulette</div>
      </div>
    </div>);
  }
}
