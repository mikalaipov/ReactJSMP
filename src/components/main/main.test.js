

import React from 'react';
import {shallow} from 'enzyme'
import {Main} from './Main.js';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


it('Main rendered correctly', () => {
  const AppComponent = shallow(
    <Main />
  );
  expect(AppComponent).toMatchSnapshot();
});