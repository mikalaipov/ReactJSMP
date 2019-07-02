

import React from 'react';
import {shallow} from 'enzyme'
import {Header} from './Header.js';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


it('Header rendered correctly', () => {
  const AppComponent = shallow(
    <Header />
  );
  expect(AppComponent).toMatchSnapshot();
});