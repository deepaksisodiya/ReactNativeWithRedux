/**
 * Created by deepaksisodiya on 06/11/16.
 */


import React, { Component } from 'react';

import App from './src/App';

import {Provider} from 'react-redux';

import store from './src/redux/store';

export default class ReactNativeWithRedux extends Component {
  render() {
    return (
      <Provider store={store}>
        <App store={store} />
      </Provider>
    );
  }
}