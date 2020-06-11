import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import InputForm from '../config/InputForm';

export default class SignUp2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topcontainer}>
          <View style={styles.textWrapper}>
            <Text style={styles.text}> ENTER CONFIRMATION CODE</Text>
          </View>
          <View style={styles.codeWrapper}>
            <Text>
              <Text style={styles.code}>
                Enter the 6 digit code we sent to +92 3161616 526.
              </Text>
              <Text style={styles.request}>Request a new one.</Text>
            </Text>
          </View>
          <View style={styles.form}>
            <InputForm placeholderText={'Confirmation Code'} />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttontext}> Next </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.footerwraper]}>
          <View style={styles.footertext}>
            <Text>
              <Text style={{color: 'gray'}}>Already have an account? </Text>
              <Text style={{fontWeight: 'bold'}}>Login</Text>{' '}
            </Text>
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
  textWrapper: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: '20%',
  },
  text: {
    fontWeight: 'bold',
  },
  codeWrapper: {
    display: 'flex',
    marginLeft: '20%',
    marginRight: '20%',
    marginBottom: 15,
  },
  code: {
    color: 'gray',
    margin: 10,
  },
  request: {
    fontWeight: 'bold',
    color: '#0095f9',
  },
  form: {
    marginLeft: '10%',
    marginRight: '10%',
    margin: 5,
  },
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
  topcontainer: {
    display: 'flex',
    flex: 1,
  },
  footerwraper: {
    borderTopColor: 'gray',
    width: '100%',
    borderTopWidth: 1,
    padding: 15,
  },
  footertext: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
