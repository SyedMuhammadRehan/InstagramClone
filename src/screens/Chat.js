import React, { Component } from 'react';
import {  View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    Dimensions,
    TouchableOpacity,} from 'react-native';
import DirectHeader from '../config/DirectHeader';
import images from '../assets/images';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import DirectSearch from '../config/DirectSearch';
import ActiveMarker from '../config/ActiveMarker';
import DirectBottomNavigation from '../config/DirectBottomeNavigation';

const {width} = Dimensions.get('window');

export default function Chat ()
{
    const direct = [
        {
          id: 1,
          author: 'rehan_tweetss',
        
          profile:images.profile.pic1,
        
        },
        {
            id: 1,
            author: 'xyed_rehan',
            profile:images.images.rehan1,
            
           
          },
          {
            id: 2,
            profile:images.images.rehan2,
            author: 'Syed_rehan',
          
           
          },
          {
            id: 3,
            author: 'rehan_tweetss',
            profile:images.images.pic1,
            
           
          },
          {
            id: 4,
            profile:images.images.rehan2,
            author: 'Syed_rehan',
          },
          {
            id: 5,
            author: 'xyed_rehan',
            profile:images.images.rehan1,
            
          },
          {
            id: 6,
            profile:images.images.rehan2,
            author: 'Syed_rehan',
          },
          {
            id: 7,
            author: 'rehan_tweetss',
        
            profile:images.profile.pic1,
          
          },
          {
            id: 8,
            author: 'xyed_rehan',
            profile:images.images.rehan1,
            
          },
          {
            id: 9,
            profile:images.images.rehan2,
            author: 'Syed_rehan',
          },
          {
            id: 10,
            author: 'xyed_rehan',
            profile:images.images.rehan1,
          },
          {
            id: 11,
            author: 'rehan_tweetss',
        
            profile:images.profile.pic1,
          
          },
          {
            id: 12,
            profile:images.images.rehan2,
            author: 'Syed_rehan',
          },
          {
            id: 13,
            author: 'xyed_rehan',
            profile:images.images.rehan1,
          
          },
          {
            id: 14,
            profile:images.images.rehan2,
            author: 'Syed_rehan',
          },
          {
            id: 15,
            profile:images.images.rehan2,
            author: 'Syed_rehan',
          },
      ];
      function renderItem({item: direct}) {
        return (
          <View>
              <TouchableOpacity>
            <View style={styles.directContainer}>
              <View style={styles.userInfo}>
                <Image style={styles.ProfileImage} source={direct.profile}
                 /> 
                    <ActiveMarker />
                    </View>
               
              <View style={styles.chatArea}> 
  <Text style={styles.author}>{direct.author}</Text>
  <Text> Active Now</Text>
              </View>
                  
                
    
         
              <View style={styles.directCamera}>
                <TouchableOpacity>
                <EvilIcons name="camera" size={40}  />
                </TouchableOpacity>
              </View>   
              
             
    
          </View>
        
          </TouchableOpacity>
          </View>
           );
  }

    return (
      <View>
      <DirectHeader />
      <DirectSearch />  
      
    <View style={styles.message}> 
        <Text style={styles.messagetext}> Messages</Text>
        <Text style={styles.messagerq}>1 request</Text>
        </View> 
         
      <FlatList
      data={direct}
      keyExtractor={(item) => item.id}
    showsVerticalScrollIndicator={false}
      renderItem={renderItem} />
      </View>
    );
  
}

const styles = StyleSheet.create({
  
    directContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 15,
      marginBottom:20,
      flex:1,
    },
    userInfo:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
     
    },
    
    directCamera: {},
    author: {
      fontWeight: 'bold',
      fontSize: 14,
      color: '#000',
    },
    Activity: {fontSize: 12, color: '#666', marginHorizontal:68 , marginTop:-20},
   
      postBottomWrapper: {
       paddingHorizontal:15,
       marginVertical:15,
        marginTop:-79
      },
     icons:{
         marginRight:8
  
      },
      ProfileImage:{
        width: 64,
      height: 64,
      borderRadius: 32,
     marginRight:10
      
      },
      message:{
        borderBottomWidth:0.5,
          borderBottomColor:'black',
      
       margin:5 ,
       flexDirection:'row',
       justifyContent:'space-between'
      },
      messagetext:{
    fontWeight:'600',
      
        fontSize:16
      
      },
      messagerq:{  fontWeight:'600',
      
      fontSize:16,
    color:'#629fc4'},
      chatArea:{
          flex:1,
          flexDirection:'column',
          alignItems:'flex-start',
          justifyContent:'center'
      }
  });