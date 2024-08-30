import { Image, StyleSheet, Platform,View, Text,ImageBackground, Button } from 'react-native';
export default function HomeScreen() {
  return (
    <View style={styles.titleContainer}>
      <View style={{flex:18}}>
        <ImageBackground source={require('../../assets/images/pexels-claudia-schmalz-5894614.jpg')} resizeMode='cover' style={styles.image}>
          <Image source={require('../../assets/images/Mebeli Chudo_transparent-.png')} style={styles.logo}/>
          <Text style={styles.text}>Sell What You Don't Need</Text>
        <View style={{flex:1,width:'100%',justifyContent:'flex-end',gap:1}}>
          <Button color="#fc5c65" title='Login' onPress={()=>{alert('You have logged in')}}></Button>
          <Button color="#4ecdc4" title='Register' onPress={()=>{alert('You are registered')}}></Button>
        </View>
        </ImageBackground>
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
    resizeMode: 'cover',
    height: 'auto',
    width: 'auto',
    justifyContent: 'center',
    alignContent:'center',
    alignItems:'center'
  },
  text: {
    flex:1,
    color: 'black',
    fontSize: 24,
    lineHeight: 50,
    fontWeight: 'bold',
    bottom:120,
    textAlign: 'center',
    position:'absolute',
    top:180
  },
  logo:{
    flex:1,
    width:200,
    height:200,
    position:'absolute',
    top:20
  }
});
