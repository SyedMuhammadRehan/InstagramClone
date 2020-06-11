import React, {Component} from 'react';
import {TextInput,View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {create} from 'react-test-renderer';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Phone extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.countryWrapper}>
          <Text style={styles.country}>PK +91</Text>
        </View>
        <View style={styles.textInput}>
          <TextInput value={'3161616526'}></TextInput>
        </View>
        <View style={styles.close}>
          <Icon style={styles.icon} color={"gray"} name="close" size={26} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
   
    flexDirection: 'row',
    alignItems:"center",
    borderWidth:1,
    borderColor:'gray',
   padding:7,
borderRadius:5,
backgroundColor:'#E8E8E8'

  },
 countryWrapper:{
    display:'flex',
     borderRightWidth:1,
      borderRightColor:'gray',
      paddingRight:15
},
country:{
    fontWeight:'700',
    color:'gray'
},
  textInput:{
      display:'flex',
      flex:1,
      paddingLeft:15,
      color:'black'
     
  },
  close:
  {
      display:'flex',
      flex:1
  },
  icon:{
      textAlign:"right"
  }
});
