import "../.././styles.css"
import React, { Component } from 'react';


import {FoundLabel} from "./foundLabel/foundLabel.js"
import {ReleaseButton} from "./releaseButton/releaseButton.js"
import {RatingButton} from "./ratingButton/ratingButton.js"


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

  
  