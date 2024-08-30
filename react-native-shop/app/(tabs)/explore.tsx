import { Image, StyleSheet, Platform,View, Text,ImageBackground } from 'react-native';
export default function HomeScreen() {
  return (
    <View style={styles.titleContainer}>
      <View style={{flex:2,flexDirection:'row',paddingTop:Platform.OS ==='android'?40:0,backgroundColor:'black',width:'100%'}}>
        <View style={{backgroundColor:'orange',width:70,height:70,left:30,position:'absolute',top:Platform.OS ==='android'?40:0}}></View>
        <View style={{width:70,height:70,backgroundColor:'green',right:30,position:'absolute',top:Platform.OS ==='android'?40:0}}></View>
      </View>
      
      <View style={{flex:8}}>
        <Image source={require('../../assets/images/white-chair-room_786255-18256.jpg')} style={styles.image}>

        </Image>
      </View>
      <View style={{flex:2,backgroundColor:'black',width:'100%'}}>
          
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex:1,
  },
  image: {
    flex:1,
    width:'100%',
    height:'100%',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 24,
    lineHeight: 50,
    fontWeight: 'bold',
    bottom:120,
    textAlign: 'center',
    
  },
});
