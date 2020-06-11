import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class ActiveMarker extends Component {
  render() {
    return <View style={style.conatiner} />;
  }
}

const style = StyleSheet.create({
  conatiner: {
    borderRadius: 10,
    width: 15,
    height: 15,
    borderWidth: 1,
    backgroundColor: '#71c943',
    position: 'absolute',
    right: 6,
    bottom: 5,
  },
});
