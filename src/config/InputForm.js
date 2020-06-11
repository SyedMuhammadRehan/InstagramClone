import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default class InputForm extends Component {
  render() {
    const {placeHolderText} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInput placeholder={placeHolderText} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  input: {
    backgroundColor: '#E8E8E9',
    borderWidth: 0.8,
    borderColor: 'gray',
    borderRadius: 5,
  },
});
