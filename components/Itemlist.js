import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Icon}  from "react-native-elements"
import {FlatList,StyleSheet,Image, Text,View,TouchableOpacity,Dimensions } from 'react-native'

const DATA = [
    {id: 1,title: 'Blaziken',url:require("../assets/1.png")},
    {id: 2,title: 'Carraosta',url:require("../assets/2.png")},
    {id: 3,title: 'Entei',url:require("../assets/3.png")},
    {id: 4,title: 'Feraligatr',url:require("../assets/4.png")},
    {id: 5,title: 'Gengar',url:require("../assets/5.png")},
    {id: 6,title: 'Golurk',url:require("../assets/6.png")},
    {id: 7,title: 'Blaziken',url:require("../assets/1.png")},
    {id: 8,title: 'Carraosta',url:require("../assets/2.png")},
];
  fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
  .then(response => response.json())
  .then(data => 
    console.log(data)
  );

  const Item = ({ title,url}) => {
      const [favourite,setfavourite]=useState(false);
      const setfavouriteitem=()=>{
        favourite==false ? setfavourite(true):setfavourite(false)
      }
      return(
        <View style={styles.item1}>
          <Text style={styles.title1}>{title}</Text>
            <View style={{width:"100%",justifyContent:"space-between"}}>
              <View style={{width:"100%",height:"70%"}}>
                  <Image style={styles.img} source={url}/>
              </View>
            <View style={{width:"100%",height:"30%"}}>
              <TouchableOpacity onPress={setfavouriteitem} >
                {
                  favourite==false ?<Icon type="font-awesome" name="heart-o" size={30} color="black"/>:<Icon type="font-awesome" name="heart" size={30} color="red"/>  
                }
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
};
export default function ItemList() {
    const renderItem = ({ item }) =>(
        <Item title={item.title} url={item.url}/>
    );
    return (
        <View style={styles.container1}>
            <FlatList
                marginTop={Dimensions.get("window").height*0.01}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />   
        </View>
    );
}
const styles = StyleSheet.create({
    img:{
        width:"80%",
        height:"90%",
        alignSelf:"center",
    },
    container1: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 10,
        backgroundColor:"#fffafa"
      },
      item1: {
        backgroundColor: '#f5f5f5',
        padding: 5,
        height:Dimensions.get("window").height/3.65,
        borderRadius:10,
        margin:5,
        width:Dimensions.get("window").width/2.3,
        marginLeft:Dimensions.get("window").height*0.02
      },
      title1: {
         textAlign:"center",
        fontSize: 20,
        color:"black",
        fontWeight:"bold"
      },
      title2: {
        fontSize: 14,
        paddingLeft:5,
      },
      title3: {
        fontSize: 14,
        paddingLeft:5,
        fontWeight:"bold"
      },
      title4:{
          paddingRight:5
      }
 
});
