/**
 * Created by deepaksisodiya on 06/11/16.
 */


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import {connect} from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.counter}</Text>
        <TouchableHighlight onPress={() => this.props.onIncrement()}>
          <Text>Increment</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.onDecrement()}>
          <Text>Decrement</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.CounterReducer.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch({
        type: 'INCREMENT'
      });
    },
    onDecrement: () => {
      dispatch({
        type: 'DECREMENT'
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);