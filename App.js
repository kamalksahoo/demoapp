import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import ItemList from './components/Itemlist';
import {Icon} from "react-native-elements"
export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="light"/> */}
      <Header/>
     <ItemList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fffafa",
  },
});
