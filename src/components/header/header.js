import "../.././styles.css"
import React, { Component } from 'react';


import {SiteSearch} from "./siteSearch/siteSearch.js"
import {ArrowButton} from "./arrowButton/arrowButton.js"
import {TitleButton} from "./titleButton/titleButton.js"
import {GenreButton} from "./genreButton/genreButton.js"
import {SearchButton} from "./searchButton/searchButton.js"
import {HeaderSearchButton} from "./headerSearchButton/headerSearchButton.js"
import {HeaderTitleName} from "./headerTitleName/headerTitleName.js"
import {HeaderTitleCategory} from "./headerTitleCategory/headerTitleCategory.js"
import {HeaderTitleYear} from "./headerTitleYear/headerTitleYear.js"
import {HeaderTitleDuration} from "./headerTitleDuration/headerTitleDuration.js"
import {HeaderTitleDescription} from "./headerTitleDescription/headerTitleDescription.js"

export class Header extends Component {
    render() {
      return (
        // <div className="header">
        //   <div className="rouletteLabel">netflixroulette</div>
        //   <div className="findLabel">FIND YOUR MOVIE</div>
        //   <div className="inputField">
        //     <SiteSearch />
        //     <ArrowButton />
        //   </div>
        //     <div className="searchPanel">
        //         <div className="searchTitleGenre">
        //             <div className="searchLabel">SEARCH BY&nbsp;</div>
        //             <TitleButton />
        //             <GenreButton />
        //         </div>
        //         <SearchButton />
        //     </div>
        // </div>
        <div className="header">
            <div className="headerTop">
                <div className="rouletteLabel">netflixroulette</div>
                <HeaderSearchButton />
            </div>
            <div className="headerMiddle">
                <div className="headerTitleImage">
                    <img src="../../img/L1.jpg" alt="LOTR1"/>
                </div>
                <div className="headerTitleDetails">
                    <HeaderTitleName />
                    <HeaderTitleCategory />
                    <div className="headerTitleYearAndDuration">
                        <HeaderTitleYear />
                        <HeaderTitleDuration />
                    </div>
                    <HeaderTitleDescription />
                </div>
            </div>
        </div>
      );
    }
  }

