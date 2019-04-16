

import React from 'react';
import renderer from 'react-test-renderer';
import {SortPanel} from './SortPanel.js';


it('SortPanel rendered correctly', () => {
  const AppComponent = renderer.create(<SortPanel />).toJSON();
  expect(AppComponent).toMatchSnapshot();
});