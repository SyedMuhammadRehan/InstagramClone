import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class CreateButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}> Create New Account </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
  },
  button: {
    padding: 15,
    backgroundColor: '#0095f9',
    borderRadius: 12,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
});
