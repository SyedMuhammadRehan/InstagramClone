import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width} = Dimensions.get('window');
export default class HomeTOPNavigation extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.containerWrapper}>
          <View style={styles.topRightWrapper}>
            <TouchableOpacity>
              <MaterialIcons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{marginLeft: 20, fontSize: 20, fontWeight: '600'}}>
              Direct
            </Text>
          </View>
          <View style={styles.Text}></View>
          <View style={styles.topRightWrapper}>
            <TouchableOpacity>
              <AntDesign
                name="videocamera"
                size={24}
                style={styles.icons}
                color="black"
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <SimpleLineIcons
                name="note"
                size={24}
                style={styles.icons}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: '#fafafa',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    marginTop: 1,
    height: 45,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.1,
    elevation: 2,
  },
  containerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    margin: 10,
  },
  Text: {
    position: 'absolute',
    left: width / 2 - 50,
  },
  icons: {
    marginHorizontal: 10,
  },
  topRightWrapper: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  story: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
