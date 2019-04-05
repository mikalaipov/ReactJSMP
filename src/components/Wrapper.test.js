

import result from './Wrapper.js';

import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from './Wrapper.js';


test('Test works', () => {
  expect(result()).toBe(true);
});

// it('render correctly', () => {
//   const AppComponent = renderer.create(<Wrapper />).toJSON();
//   expect(AppComponent).toMatchSnapshot();
// });