

import React from 'react';
import renderer from 'react-test-renderer';
import {Wrapper} from './Wrapper.js';


it('Wrapper render correctly', () => {
  const AppComponent = renderer.create(<Wrapper />).toJSON();
  expect(AppComponent).toMatchSnapshot();
});