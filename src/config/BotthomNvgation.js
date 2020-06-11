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

export default class BottomNavigation extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
     
          <View style={styles.bottomWrapper}>
            <TouchableOpacity>
              <SimpleLineIcons name="home" size={32}  style={styles.icons}/>
            </TouchableOpacity>
             <TouchableOpacity>
             <EvilIcons name="search"  size={42} style={styles.icons} />
            </TouchableOpacity>
          </View>
          <View style={styles.addButtonContainer}>
        <TouchableOpacity onPress={() => {}}>
          <LinearGradient
            style={styles.addButton}
              colors={['#faa448', '#e54167']}>
         
       <MaterialIcons name="add" size={32} color="white" />
          </LinearGradient>
        </TouchableOpacity>
      </View>

          <View style={styles.bottomWrapper}>
            <TouchableOpacity>
            <EvilIcons name="heart"  size={42} style={styles.icons} />
             </TouchableOpacity>

            <TouchableOpacity>
            <Image
            style={styles.image}
            source={require('../assets/images/pic_1.jpg')}
          /> 
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
    height: 65,
    bottom: 0,
    backgroundColor: 'white',
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
bottomWrapper: {
    
    flexDirection:'row',
    
  },
  image: {
    width: 30,
    height: 30,
    marginRight:23,
    marginHorizontal: 24,

    borderRadius:13
  },
  icons: {
    marginHorizontal: 24,
  },
  topRightWrapper: {
    flexDirection: 'row',
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 32.5,
    left: width / 2 - 28,
    right: 0,
    width: 56,
    height: 56,
  },
  addButton: {
    borderRadius: 28,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
