/**
 * Created by deepaksisodiya on 06/11/16.
 */


import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import {connect} from 'react-redux';

class User extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.name} is {this.props.age} years old</Text>
        <TouchableHighlight onPress={() => this.props.onChangeName('Chetan')}>
          <Text>ChangeName</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.onChangeAge(28)}>
          <Text>ChangeAge</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.UserReducer.name,
    age: state.UserReducer.age,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeName: (name) => {
      dispatch({
        type: 'SET_NAME',
        payload: name
      });
    },
    onChangeAge: (age) => {
      dispatch({
        type: 'SET_AGE',
        payload:age
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);