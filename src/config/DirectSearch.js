import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
export default class DirectSearch extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <EvilIcons
            name="search"
            size={30}
            style={styles.icons}
            color="#939397"
          />
        </TouchableOpacity>

        <View style={styles.textInput}>
          <TextInput
            placeholder="Search"
            style={{fontSize: 20, justifyContent: 'center', padding: -20}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',

    borderRadius: 10,

    margin: 20,
    height: 40,
    backgroundColor: '#efefef',
  },
  countryWrapper: {},
  country: {
    fontWeight: '700',
    color: 'gray',
  },
  textInput: {
    color: 'black',
  },

  icons: {
    borderColor: 'gray',
  },
});
