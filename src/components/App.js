import ".././styles.css"
import React, { Component } from 'react';
import { Fragment } from 'react';

export class Wrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <SortPanel />
        <Main />
        <Footer />
      </div>
    );
  }
}

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="rouletteLabel">netflixroulette</div>
        <div className="findLabel">FIND YOUR MOVIE</div>
        <div className="inputField">
          <SiteSearch />
          <ArrowButton />
        </div>
        <SearchPanel />
      </div>
    );
  }
}

export class SiteSearch extends Component {
  render() {
    return (
      <input type="search" className="siteSearch" name="q" aria-label="Search through site content"></input>       
    );
  }
}

export class ArrowButton extends Component {
  render() {
    return (
      <button type="submit" className="arrowButton"></button>
    );
  }
}

export class SearchPanel extends Component {
  render() {
    return (
      <div className="searchPanel">
        <div className="searchTitleGenre">
          <div className="searchLabel">SEARCH BY</div>
          <TitleButton />
          <GenreButton />
        </div>
        <SearchButton />
      </div>
    );
  }
}

export class TitleButton extends Component {
  render() {
    return (
      <button className="titleButton">TITLE</button>
    );
  }
}

export class GenreButton extends Component {
  render() {
    return (
      <button className="genreButton">GENRE</button>
    );
  }
}

export class SearchButton extends Component {
  render() {
    return (
      <button className="searchButton">SEARCH</button>
    );
  }
}

export class SortPanel extends Component {
  render() {
    return (
      <div className="sortPanel">
        <FoundLabel />
        <div className="sortByLabel">Sort by</div>
        <ReleaseButton />
        <RatingButton />
      </div>
    );
  }
}

export class FoundLabel extends Component {
  render() {
    return (
      <div className="foundLabel">7 movie found</div>
    );
  }
}

export class ReleaseButton extends Component {
  render() {
    return (
      <button className="releaseButton">release date</button>
    );
  }
}

export class RatingButton extends Component {
  render() {
    return (
      <button className="ratingButton">rating</button>
    );
  }
}

export class Main extends Component {
  render() {
    return (
      <div className="main">
        <div class="ticket">
            <div class="ticketImage">
                <img src="../.././img/LOTR1.jpg" alt="LOTR1"/>
            </div>
            <div class="ticketName">The Lord of the Rings: The Fellowship of the Ring</div>
            <div class="ticketYear">2001</div>
            <div class="ticketGenre">Fantasy</div>
        </div>
        <div class="ticket">
            <div class="ticketImage">
                <img src="../.././img/LOTR2.jpg" alt="LOTR2"/>
            </div>
            <div class="ticketName">The Lord of the Rings: The Two Towers</div>
            <div class="ticketYear">2002</div>
            <div class="ticketGenre">Fantasy</div>
        </div>
        <div class="ticket">
            <div class="ticketImage">
                <img src="../.././img/LOTR3.jpg" alt="LOTR3"/>
            </div>
            <div class="ticketName">The Lord of the Rings: The Return of the King</div>
            <div class="ticketYear">2003</div>
            <div class="ticketGenre">Fantasy</div>
        </div>
        <div class="ticket">
            <div class="ticketImage">
                <img src="../.././img/HOBBIT1.jpg" alt="HOBBIT1"/>
            </div>
            <div class="ticketName">The Hobbit: An Unexpected Journey</div>
            <div class="ticketYear">2012</div>
            <div class="ticketGenre">Fantasy</div>
        </div>
        <div class="ticket">
            <div class="ticketImage">
                <img src="../.././img/HOBBIT2.jpg" alt="HOBBIT2"/>
            </div>
            <div class="ticketName">The Hobbit: The Desolation of Smaug</div>
            <div class="ticketYear">2013</div>
            <div class="ticketGenre">Fantasy</div>
        </div>
        <div class="ticket">
            <div class="ticketImage">
                <img src="../.././img/HOBBIT3.jpg" alt="HOBBIT3"/>
            </div>
            <div class="ticketName">The Hobbit: The Battle of the Five Armies</div>
            <div class="ticketYear">2014</div>
            <div class="ticketGenre">Fantasy</div>
        </div>
        <div class="ticket">
            <div class="ticketImage">
                <img src="../.././img/MORTALE.jpg" alt="MORTALE"/>
            </div>
            <div class="ticketName">Mortal Engines</div>
            <div class="ticketYear">2018</div>
            <div class="ticketGenre">Fantasy</div>
        </div>
      </div>
    );
  }
}

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="rouletteLabel">netflixroulette</div>
      </div>
    );
  }
}

export const myElement = (
  <Fragment>
    <Wrapper />
  </Fragment>
);

export default function result() {
  return (myElement ? true : false)
}