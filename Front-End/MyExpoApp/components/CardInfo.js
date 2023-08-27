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
const CardInfo = () => {
  return (
<View style={styles.mainContiner}>
<View style={styles.container_card}>
    <View style={styles.back_ground_card}>
        <View style={styles.container_icon_pls_details}>
        <View>
            <Image source={require('../assets/icon/Settings_Information_Icons_name.png')}></Image>
        </View>
        <View style={styles.container_details}>
            <Text style={styles.text}>Name</Text>
            <TouchableOpacity>
                <Text>nadeen</Text>
            </TouchableOpacity>
        </View>
        </View>
    </View>
   </View>
   <View style={styles.container_card}>
    <View style={styles.back_ground_card}>
        <View style={styles.container_icon_pls_details}>
        <View>
            <Image source={require('../assets/icon/Settings_Information_name_Icons.png')}></Image>
        </View>
        <View style={styles.container_details}>
            <Text style={styles.text}>E-mail</Text>
            <TouchableOpacity>
                <Text>nadeenadel98@gmail.com</Text>
            </TouchableOpacity>
        </View>
        </View>
    </View>
   </View>
   <View style={styles.container_card}>
    <View style={styles.back_ground_card}>
        <View style={styles.container_icon_pls_details}>
        <View>
            <Image source={require('../assets/icon/Settings_Information_pasword_Icons.png')}></Image>
        </View>
        <View style={styles.container_details}>
            <Text style={styles.text}>Password</Text>
            <TouchableOpacity>
                <Text>changed 2 week a go</Text>
            </TouchableOpacity>
        </View>
        </View>
    </View>
   </View>
   <View style={styles.container_button}>
   <TouchableOpacity style={styles.back_ground_button}>
    <Text>Save Change</Text>
   </TouchableOpacity>
   </View>
</View>
  )
}

export default CardInfo;
const styles = StyleSheet.create({
    mainContiner:{
      marginTop:40,
      flexDirection:'column',
      gap:12
    },
    container_icon_pls_details:{
        flexDirection:'row',
        gap:10
    },
    container_card:{
        marginLeft:12,
        marginRight:12,
    },
    back_ground_card:{
        backgroundColor:'#D2E6E4',
        padding:15,
        borderRadius:12
    },
    back_ground_button:{
        backgroundColor:'#FFB606',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderRadius:12,
    },
    container_button:{
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontWeight:'bold',
    }
})