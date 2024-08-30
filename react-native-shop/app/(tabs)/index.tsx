import { Image, StyleSheet, Platform,View, Text,ImageBackground } from 'react-native';
export default function HomeScreen() {
  return (
    <View style={styles.titleContainer}>
      <View style={{flex:10}}>
        <ImageBackground source={require('../../assets/images/pexels-photo-5894614.webp')} resizeMode="cover" style={styles.image}>
          <Image source={require('../../assets/images/R.png')} style={styles.logo}/>
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
  logo:{
    width:100,
    height:100,
    bottom:150,
    left:150
  }
});
