import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import PostContent from '../src/screens/PostContent';
import HomeTOPNavigation from '../src/config/HomeTOPNavigation';
import BottomNavigation from './config/BotthomNvgation';

export default class HomeScreen extends Component {
  
  render() {
    return (
      <View style={styles.container}>
      <HomeTOPNavigation />
    <PostContent/>
       <BottomNavigation />
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
});