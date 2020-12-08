import React from 'react';
import { StyleSheet, Text, View ,StatusBar} from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ReactNativeCI</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#abafae',
    alignItems: 'center',
    justifyContent: "flex-end",
    width:"100%",
    height:80,
    paddingBottom:5,
  },
  text:{
    color:"white",
    fontSize:20
  }
});
