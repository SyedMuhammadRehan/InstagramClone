import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  _ScrollView,
} from 'react-native';
import images from '../assets/images';
import LinearGradient from 'react-native-linear-gradient';

function Stories() {
  const data = [
    {id: 1, name: 'rehan', pic: images.images.pic1},
    {id: 2, name: 'rehan', pic: images.images.rehan1},
    {id: 3, name: 'rehan', pic: images.images.rehan2},
  ];
  function renderItem({item: data}) {
    return (
      <LinearGradient
        colors={['#faa448', '#e54167']}
        key={data.name}
        style={styles.imageContainer}>
        <View style={styles.imageWrapper}>
          <Image source={data.pic} style={styles.image} resizeMode="cover" />
        </View>
      </LinearGradient>
    );
  }
  return (
    <View>
      <ScrollView>
        <FlatList
          contentContainerStyle={styles.continer}
          data={data}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  continer: {
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 8,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  imageContainer: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  imageWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

export default Stories;
