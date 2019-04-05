import "../../.././styles.css"
import React, { Component } from 'react';

  export class SiteSearch extends Component {
    render() {
      return (
        <input type="search" className="siteSearch" name="q" aria-label="Search through site content"></input>       
      );
    }
  }
  