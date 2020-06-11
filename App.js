import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import SplashScreen from "./src/screens/SplashScreen";
import InitialScreen from './src/screens/InitialScreen';
import SignUp from "./src/screens/SignUp";
import SignUp2 from './src/screens/SignUp2';
import PostContent from './src/screens/PostContent';
import HomeScreen from './src/HomeScreen';
import HomeTOPNavigation from './src/config/HomeTOPNavigation';
import Chat from './src/screens/Chat';
import Direct from './src/screens/Direct';

export default class App  extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <HomeScreen/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
 container:{
   flex:1,
   }
});
