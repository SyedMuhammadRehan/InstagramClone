import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import images from '../assets/images';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Stories from '../config/Stories';

const {width} = Dimensions.get('window');

function PostContent() {
  const post = [
    {
      id: 1,
      author: 'rehan_tweetss',
      image: images.images.tweet,
      profile: images.profile.pic1,
      likes: '1234',
      description: 'Ye to hoga',
      hashtags: '#memes #Sargodha',
      place: 'Sargodha',
    },
    {
      id: 1,
      author: 'rehan_tweetss',
      profile: images.profile.pic1,
      image: images.images.pic1,
      likes: '1234',
      description: 'Mom is just Love',
      hashtags: '#memes #Sargodha',
      place: 'Sargodha',
    },
    {
      id: 2,
      profile: images.profile.pic1,
      author: 'rehan_tweetss',
      image: images.images.pic1,
      likes: '1234',
      description: 'Mom is just Love',
      hashtags: '#memes #Sargodha',
      place: 'Sargodha',
    },
    {
      id: 3,
      profile: images.profile.pic1,
      author: 'rehan_tweetss',
      image: images.images.pic1,
      likes: '1234',
      description: 'Mom is just Love',
      hashtags: '#memes #Sargodha',
      place: 'Sargodha',
    },
  ];
  function renderItem({item: post}) {
    return (
      <View>
        <View style={styles.postHeader}>
          <View style={styles.userInfo}>
            <Image style={styles.ProfileImage} source={post.profile} />
            <Text style={styles.author}>{post.author}</Text>
          </View>

          <TouchableOpacity>
            <SimpleLineIcons name="options" />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.place}>{post.place}</Text>
        </View>
        <View>
          <Image style={styles.image} source={post.image} />
        </View>

        <View style={styles.postBottomWrapper}>
          <View style={styles.postBottomactions}>
            <View style={styles.postBottomLeftWrapper}>
              <TouchableOpacity>
                <EvilIcons
                  name="heart"
                  size={26}
                  color="#DC4141FF"
                  style={styles.icon1}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <EvilIcons name="comment" size={26} style={styles.icons} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="send" size={24} style={styles.icons} />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Feather name="bookmark" size={24} style={styles.icons} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.likesinfo}>
            <View>
              <Text style={styles.likee}>{post.likes} likes</Text>
            </View>
            <View>
              <Text style={styles.descriptions}>
                <Text style={{fontWeight: 'bold'}}>{post.author} </Text>
                {post.description}
              </Text>
            </View>
            <View>
              <Text style={styles.hashtagss}>{post.hashtags}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  return (
    <FlatList
      data={post}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 30,
  },
  postInfo: {},
  posOptions: {},
  author: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
  place: {fontSize: 12, color: '#666', marginHorizontal: 68, marginTop: -20},
  image: {
    width: width - 31,
    height: 500,
    marginHorizontal: 15,
    borderRadius: 18,
    resizeMode: 'center',
    marginTop: -75,
  },
  postBottomWrapper: {
    paddingHorizontal: 15,
    marginVertical: 15,
    marginTop: -79,
  },
  postBottomLeftWrapper: {
    flexDirection: 'row',
  },
  postBottomactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  icons: {
    marginRight: 8,
  },
  icon1: {
    marginRight: 8,
  },

  likee: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: -10,
  },
  descriptions: {
    lineHeight: 18,
    color: '#000',
  },
  hashtagss: {
    fontWeight: 'bold',
    color: '#5b7698',
  },
  ProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 8,
    flexDirection: 'row',
  },
});
export default PostContent;
