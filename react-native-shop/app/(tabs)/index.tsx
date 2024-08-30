import { Image, StyleSheet, Platform,View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.titleContainer}>
      <Text style={{color:'red'}}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent:'center',
    justifyContent:'center',
    gap: 8,
    flex:1,
  },
});
