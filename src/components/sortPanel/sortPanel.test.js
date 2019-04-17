

import React from 'react';
import {shallow} from 'enzyme'
import {SortPanel} from './SortPanel.js';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('SortPanel rendered correctly', () => {
  const AppComponent = shallow(
    <SortPanel />
  );
  expect(AppComponent).toMatchSnapshot();
});