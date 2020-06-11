import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Chat from './Chat';
import DirectBottomNavigation from '../config/DirectBottomeNavigation';

export default class Direct extends Component {

  render() {
    return (
      <View style={styles.container}>
      <Chat/>
      <DirectBottomNavigation />
        </View>
    );
  }
}
const styles =StyleSheet.create({
    container:{
        display:'flex',
        flex:1
    },
    text:{
        fontSize:24
    }
})