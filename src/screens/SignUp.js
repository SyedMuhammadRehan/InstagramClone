import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Phone from '../config/Phone';
import CreateButton from '../config/button';
export default class SignUp extends Component {
    constructor(props){
        super(props)
           this.state={ isPhoneEnabled:true} 
        } 
    switchButton(val){
       this.setState({isPhoneEnabled:val})
    }
  render() {
      const {isPhoneEnabled}=this.state
    return (
      <View style={styles.container}>
          <View style={styles.topcontainer}>
        <View style={styles.avatarconatainer}>
          <Image
            style={styles.avatar}
            source={require('../assets/images/12.png')}
          />
        </View>
        <View style={styles.switchWrapper}>
          <TouchableOpacity onPress={() => this.switchButton(true)} style={[styles.switchtext, {borderBottomColor:isPhoneEnabled ? 'black': 'gray',}]}>
            <Text style={[styles.text, { color: isPhoneEnabled ? 'black' : 'gray'}]}>Phone</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.switchButton(false)}  style={[styles.switchtext, {borderBottomColor:isPhoneEnabled ? 'gray': 'black',}]}>
            <Text style={[styles.text, { color: isPhoneEnabled ? 'gray' : 'black'}]}>Email</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.phoneForm}>
          <Phone />
        </View>
        <View style={styles.notificationWrapper}>
          <Text style={styles.notifications}>
            {' '}
            You may receive SMS upate from Instagram amd can opt out at time
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>

          <Text style={styles.buttontext}> Next </Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style={[styles.footerwraper]}>
          <View style={styles.footertext}>
            <Text><Text style={{color: 'gray'}}>Already have an account? </Text ><Text style={{fontWeight:'bold'}}>Login</Text> </Text>
           
</View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  avatarconatainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 250,
    height: 250,
  },
  switchWrapper: {
    display: 'flex',
    flexDirection: 'row',
    margin: 30,
    marginTop: 0,
  },
  switchtext: {
    display: 'flex',
    flex: 1,
    
    borderBottomWidth: 2,
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
     fontWeight : 'bold'
  },
  phoneForm: {
    display: 'flex',
    margin: 30,
    marginTop: 10,
  },
  notificationWrapper: {
    padding: 30,
    paddingTop: 10,
  },
  notifications: {color: 'gray', textAlign: 'center'},
  buttonContainer: {marginLeft: 8, marginRight: 8, padding: 30, paddingTop: 10},

  button: {
    padding: 13,

    backgroundColor: '#0095f9',

    borderRadius: 5,
  },
  buttontext: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
  topcontainer:{
      display:'flex',
      flex:1
  },
  footerwraper: {
    borderTopColor: 'gray',
    width: '100%',
    borderTopWidth: 1,
    padding:15
  },
  footertext: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
