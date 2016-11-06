/**
 * Created by deepaksisodiya on 06/11/16.
 */


import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Counter from './Components/Counter';
import User from './Components/User';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter />
        <User />
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