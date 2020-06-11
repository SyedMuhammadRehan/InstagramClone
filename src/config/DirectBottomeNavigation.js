import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
const {width} = Dimensions.get('window');

export default class DirectBottomNavigation extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
     
          
        
         

          <View style={styles.addButtonContainer}>
            <TouchableOpacity  style={styles.addButton}>
            <EvilIcons name="camera" size={43} color="blue" color={['#4ca1af']} backgroundColor={'black'}/>
            <Text style={styles.text}>Camera</Text>
             </TouchableOpacity>
          </View>
        
    
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    height: 50,
    bottom: 0,
    backgroundColor: '#efefef',
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  
  addButtonContainer: {
    position: 'absolute',
   
    left: width / 2 - 28,
    right: 0,
    width: 70,
    height: 70,
  },
  addButton: {

    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    
  },
  text:{
      fontWeight:'bold',
      fontSize:18,
      color:'#569ac4'
  },
  
});
