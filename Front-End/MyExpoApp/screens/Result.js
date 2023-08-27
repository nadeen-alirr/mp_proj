import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";

import InputFiled from "../components/InputFiled";
import { useNavigation } from "@react-navigation/native";
const Result = () => {
    const navigation = useNavigation();
    const handle_search=()=>{
        navigation.navigate('Result');
    }
    const handle_back=()=>{
        navigation.navigate('Home');
    }
  return (
    <SafeAreaView style={styles.Maincontainer}>
      <View>
        <Image source={require("../assets/images/Logo.png")}></Image>
      </View>
      <View style={styles.container_header}>
        <TouchableOpacity style={styles.container_back_icon} onPress={handle_back}>
          <Image source={require("../assets/images/backsign.png")}></Image>
        </TouchableOpacity>
        <View style={styles.container_inputfiled}>
          <InputFiled style={styles.input_filed} placeholder={'Search'}/>
          <TouchableOpacity onPress={handle_search}>
          <Image source={require('../assets/icon/Search_Icon.png')} style={styles.icon_search}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerResult}>
        <Text style={styles.result}>2 Result</Text>
      </View>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
      <View style={styles.ContainerImage}>
        <View style={styles.background_image}>
            <Image source={require('../assets/images/Cool_Kids_Discussion.png')} style={styles.image_category}></Image>
            <View style={styles.container_price}>
                <Text style={styles.price}>$50</Text>
            </View>
        </View>
        <View style={styles.container_info_card}>
        <Text style={styles.duration}>3 h 30 min</Text>
        <Text style={styles.Title}>UI</Text>
        <Text style={styles.description}>Advanced mobile interface design</Text>
        </View>
      </View>
      <View style={styles.ContainerImage}>
        <View style={styles.background_image}>
            <Image source={require('../assets/images/Cool_Kids_Discussion.png')} style={styles.image_category}></Image>
            <View style={styles.container_price}>
                <Text style={styles.price}>$50</Text>
            </View>
        </View>
        <View style={styles.container_info_card}>
        <Text style={styles.duration}>3 h 30 min</Text>
        <Text style={styles.Title}>UI</Text>
        <Text style={styles.description}>Advanced mobile interface design</Text>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Result;
const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginTop: 0,
    backgroundColor: "#fff",
  },
  container_header: {
    alignItems: "center",
    flexDirection: "row",
  },
  input_filed: {},
  container_inputfiled: {
    flex: 1,
    justifyContent: "center",
  },
  container_back_icon: {
    alignItems: "center",
    marginTop: 10,
    marginLeft: 12,
  },
  containerResult:{
    marginLeft:12
  },
  result:{
    fontWeight:'bold',
    fontSize:18,
    marginBottom:10
  },
  icon_search:{
    position:'absolute',
    top:-40,
    right:30
  },
  ContainerImage:{
    margin:12,
    justifyContent:'center',
    borderRadius:2,
    borderWidth: 0.3, 
    borderBlockColor:'gray',
    borderRadius:10,
    elevation: 2,
    marginBottom: 20,
    shadowColor: "#000",
  },
  background_image:{
    backgroundColor:'#D2E6E4',
    paddingBottom:50,
    justifyContent:'center',
    alignItems:'center',
    paddingTop:15,
    borderTopEndRadius:10,
    borderTopStartRadius:10,

  },
  image_category:{
    borderRadius:10
  },
  duration:{
    // color:'#D2E6E1',
  },
  Title:{
    fontWeight:'bold',
    fontSize:25,
  },
  description:{

  },
  container_info_card:{
    marginLeft:15,
    padding:12
  },
  container_price:{
    backgroundColor:"#0B7077",
    paddingLeft:12,
    paddingRight:12,
    borderRadius:18,
    position:'absolute',
    top:160,
    right:20,
  },
  price:{
    color:'#fff'
  },
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
});
