import React from 'react'
import {
    StyleSheet,
    View,
    StatusBar,
    SafeAreaView,
    Image,
    TouchableOpacity,
    Text,
    Alert,
    TextInput,
    Button,
  } from "react-native";
  import CardInfo from '../components/CardInfo';
  import Navigator from '../components/Navigator';
const Setting = () => {
  return (
    <SafeAreaView style={styles.Maincontainer}>
        <View>
        <View style={styles.containerImage}>
            <Image source={require('../assets/images/Cool_Kids_Bust.png')} style={styles.image_profile}></Image>
            <Image source={require('../assets/images/Vector.png')} style={styles.plus_icon}></Image>
        </View>
        <View>
            <Text style={styles.titleSetting}>Account information</Text>
        </View>
        <CardInfo/>
        </View>
        <View style={styles.navigation}>
        <Navigator />
        </View>
    </SafeAreaView>
  )
}

export default Setting;
const styles = StyleSheet.create({
    Maincontainer: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#fff',
      },
      containerImage: {
        alignSelf: 'center',
        width: 180,
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      },
      plus_icon: {
        position: 'absolute',
        top: 130,
        left: 155,
        resizeMode: 'contain',
      },
      image_profile: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 90,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#F8F2EE',
        resizeMode: 'cover',
      },
      titleSetting:{
        fontWeight:'bold',
        left:12,
        top:20,
        fontSize:20
      },
      navigation:{
        flex:1,
        justifyContent:'flex-end'
      }
})