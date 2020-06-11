import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Stories from './Stories';

const {width} = Dimensions.get('window');
export default class HomeTOPNavigation extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.containerWrapper}>
          <View style={styles.topRightWrapper}>
            <TouchableOpacity>
              <Feather name="camera" size={28} color="black" />
            </TouchableOpacity>
          </View>
          <Image
            style={styles.image}
            source={require('../assets/images/11.png')}
          />

          <View style={styles.topRightWrapper}>
            <TouchableOpacity>
              <Feather name="tv" size={28} style={styles.icons} color="black" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Feather
                name="send"
                size={28}
                style={styles.icons}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          <View style={styles.story}>
            <Stories />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    marginTop: 10,
  },
  containerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  image: {
    width: 100,
    height: 40,
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
