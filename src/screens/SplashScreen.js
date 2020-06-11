import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class SplashScreen extends Component {
 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.icontainer}>
          <Image
            style={styles.image}
            source={require('../assets/images/in.png')}
          />
        </View>
        <View style={styles.facebook}>
          <Text style={styles.from}>From</Text>
        </View>
        <View style={styles.fbwraper}>
          <Image
            style={styles.fbimage}
            source={require('../assets/images/fb.png')}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  icontainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 280,
  },
  image: {
    width: 200,
    height: 200,
  },
  facebook: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  fbwraper: {
    height: 20,
    width: '50%',
    marginBottom: 80,
    alignItems: 'center',
  },
  fbimage: {
    width: 180,
    height: 50,
  },
  from: {
    color: 'gray',
  },
});
