import React, {Component} from 'react';
import {PageHeader} from './header/header';
import {PageFooter} from './footer/footer';
import {Main} from './main/main';
import {Provider} from 'react-redux';
import {store, persistor} from '../store/store';
import {PersistGate} from 'redux-persist/lib/integration/react';

export class Wrapper extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <div className='container'>
              <PageHeader />
              <div className='container__content'>
                <Main/>
              </div>
              <PageFooter />
            </div>
          </PersistGate>
        </Provider>
      </div>
    );
 }
}