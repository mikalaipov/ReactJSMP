

import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './Main.js';


it('Main rendered correctly', () => {
  const AppComponent = renderer.create(<Main />).toJSON();
  expect(AppComponent).toMatchSnapshot();
});