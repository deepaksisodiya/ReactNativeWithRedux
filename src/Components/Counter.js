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

export default class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter:0
    };
  }

  onIncrement = () => {
    this.setState({
      counter:this.state.counter + 1,
    });
  };

  onDecrement = () => {
    this.setState({
      counter:this.state.counter - 1,
    });
  };

  render() {
    return (
      <View>
        <Text>{this.state.counter}</Text>
        <TouchableHighlight onPress={this.onIncrement}>
          <Text>Increment</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onDecrement}>
          <Text>Decrement</Text>
        </TouchableHighlight>
      </View>
    );
  }
}