import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CreateButton from '../config/button';

export default class InitialScreen extends Component {
constructor(props){
    super(props);
    this.state = {
        languageModalVisible:false,
    };
}
handleClick(){
      this.setState({ languageModalVisible:! this.state.languageModalVisible}); 
}
  render() {
        const {languageModalVisible} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.Language}>
          <TouchableOpacity style={styles.opacity} onPress={() => {this.handleClick();}}>
            <Text>
              <Text>English(United States)</Text>
              <Icon name="caret-down" size={15} />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.create}>
          <Image
            style={styles.instatext}
            source={require('../assets/images/intext.png')}
          />
          <CreateButton style={styles.text} />
          <TouchableOpacity>
            <Text style={{color: '#0095f9'}}> Login </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerwraper}>
              <View style={styles.footertext}> 
                  <Text style={{color:"gray"}}>from</Text>
            <Text style={{fontWeight:'bold'}}>FACEBOOK</Text>
            </View>
          </View>
        </View>
<Modal visible={languageModalVisible} >
    <TouchableOpacity onPress={()=>{this.handleClick();}}style={styles.modalcontainer} transparent={true} >
        <View  style={[languageModalVisible ? {backgroundColor:'rgba(0,0,0,0.5)'}:null]}>
<View >
</View>
        </View>
<Text style={{fontSize:40 }}>Close Modal</Text>
    </TouchableOpacity>
</Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  Language: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  create: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    display: 'flex',
  },
  footer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  opacity: {
    color: 'gray',
    opacity: 0.5,
  },
  instatext: {
    width: '54%',
    height: 80,
  },
  text: {
    marginBottom: 30,
  },
  footerwraper: {
    borderTopColor: 'gray',
    width: '100%',
    borderTopWidth: 1,
  },
  footertext:{
   alignItems:'center',
    justifyContent:'center',
  },
modalcontainer:{
    display:'flex',
    flex:1,
     marginLeft:'30%',
    marginRight:"10%",
    borderTopColor:'black',
},
innermodal:{
    display:'flex',
    flex:1,
    backgroundColor:'black',
},
});
