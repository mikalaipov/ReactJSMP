

import React from 'react';
import {shallow} from 'enzyme'
import {Search} from './search.js';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


it('Search rendered correctly', () => {
  const AppComponent = shallow(
    <Search />
  );
  expect(AppComponent).toMatchSnapshot();
});