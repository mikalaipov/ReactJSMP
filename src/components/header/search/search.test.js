

import React from 'react';
import renderer from 'react-test-renderer';
import {Search} from './search.js';


it('Search rendered correctly', () => {
  const AppComponent = renderer.create(<Search />).toJSON();
  expect(AppComponent).toMatchSnapshot();
});