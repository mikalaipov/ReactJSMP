

import React from 'react';
import renderer from 'react-test-renderer';
import {FilmInfo} from './filmInfo.js';


it('FilmInfo rendered correctly', () => {
  const AppComponent = renderer.create(<FilmInfo />).toJSON();
  expect(AppComponent).toMatchSnapshot();
});