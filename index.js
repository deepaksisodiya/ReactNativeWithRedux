/**
 * Created by deepaksisodiya on 06/11/16.
 */


import React, { Component } from 'react';

import App from './src/App.js';

import {Provider} from 'react-redux';



import {createStore, combineReducers, applyMiddleware} from 'redux';

import logger from 'redux-logger';

let initialState = {
  counter: 0,
};

let CounterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      state = {
        ...state,
        counter: state.counter + 1,
      };
      break;
    case 'DECREMENT':
      state = {
        ...state,
        counter: state.counter - 1,
      };
      break;
  }
  return state;
};

const initialState2 = {
  name:'Deepak',
  age:25,
};

let UserReducer = (state = initialState2, action) => {
  switch(action.type) {
    case 'SET_NAME':
      state = {
        ...state,
        name: action.payload,
      };
      break;
    case 'SET_AGE':
      state = {
        ...state,
        age: action.payload,
      };
      break;
  }
  return state;
};

let rootReducer = combineReducers({CounterReducer, UserReducer});

let myLogger = (store) => (next) => (action) => {
  console.log('Action ', action);
  next(action);
};

let store = createStore(rootReducer, {}, applyMiddleware(logger()));

store.subscribe(() => {
  console.log('store updated ', store.getState());
});

store.dispatch({
  type:'INCREMENT',
});

store.dispatch({
  type:'INCREMENT',
});

store.dispatch({
  type:'DECREMENT',
});

store.dispatch({
  type:'SET_NAME',
  payload: 'Chetan'
});

export default class ReactNativeWithRedux extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
