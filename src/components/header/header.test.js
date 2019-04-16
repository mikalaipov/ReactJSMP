

import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from './Header.js';


it('Header rendered correctly', () => {
  const AppComponent = renderer.create(<Header />).toJSON();
  expect(AppComponent).toMatchSnapshot();
});