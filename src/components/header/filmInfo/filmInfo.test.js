

import React from 'react';
import {shallow} from 'enzyme'
import {FilmInfo} from './filmInfo.js';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


it('FilmInfo rendered correctly', () => {
  const AppComponent = shallow(
    <FilmInfo />
  );
  expect(AppComponent).toMatchSnapshot();
});