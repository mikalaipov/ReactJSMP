import React from 'react';
import renderer from 'react-test-renderer';
import {Footer} from './Footer.js';


it('Footer rendered correctly', () => {
  const AppComponent = renderer.create(<Footer />).toJSON();
  expect(AppComponent).toMatchSnapshot();
});