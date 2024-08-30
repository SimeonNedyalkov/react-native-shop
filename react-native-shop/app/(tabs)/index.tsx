import { Image, StyleSheet, Platform,View, Text,ImageBackground } from 'react-native';
export default function HomeScreen() {
  return (
    <View style={styles.titleContainer}>
      <View style={{flex:10}}>
        <ImageBackground source={require('../../assets/images/pexels-claudia-schmalz-5894614.jpg')} resizeMode='cover' style={styles.image}>
          <Image source={require('../../assets/images/Mebeli Chudo_transparent-.png')} style={styles.logo}/>
          <Text style={styles.text}>Sell What You Don't Need</Text>
        </ImageBackground>
      </View>
      <View style={{flex:1,backgroundColor:'orange',width:'100%'}}>
        <Text>Hello</Text>
      </View>
      <View style={{flex:1,backgroundColor:'green',width:'100%'}}>
        <Text>Hello</Text>
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
