import React, { Component } from 'react';

import {Header} from "./header/header.js"
import {SortPanel} from "./sortPanel/sortPanel.js"
import {Main} from "./main/main.js"
import {Footer} from "./footer/footer.js"


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

export const App = (
    <Wrapper />
);