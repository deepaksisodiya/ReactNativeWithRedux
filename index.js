/**
 * Created by deepaksisodiya on 06/11/16.
 */


import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Counter from './src/Components/Counter.js';

export default class ReactNativeWithRedux extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});



import {createStore} from 'redux';

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

let store = createStore(CounterReducer);

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
