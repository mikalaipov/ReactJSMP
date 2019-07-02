import React from 'react';
import {shallow} from 'enzyme'
import {Footer} from './Footer.js';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


it('Footer rendered correctly', () => {
  const AppComponent = shallow(
    <Footer />
  );
  expect(AppComponent).toMatchSnapshot();
});