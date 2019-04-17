

import React from 'react';
import {shallow} from 'enzyme'
import {Wrapper} from './Wrapper.js';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('Wrapper render correctly', () => {
  const AppComponent = shallow(
    <Wrapper />
  );
  expect(AppComponent).toMatchSnapshot();
});
