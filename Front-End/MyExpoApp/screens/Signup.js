import React from "react";
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
import { useNavigation } from "@react-navigation/native";
import InputFiled from "../components/InputFiled";
const Signup = () => {
  const navigation = useNavigation();
  const handleSignup=()=>{
    navigation.navigate('Profile')
  }
  return (
    <SafeAreaView style={styles.Maincontainer}>
      {/* <TouchableOpacity onPress={() => {}} style={styles.backiconView}>
        <Image
          source={require("../assets/images/backsign.png")}
          style={styles.backicon}
        />
      </TouchableOpacity> */}
      <View style={styles.containerlogo}>
        <Image
          source={require("../assets/images/Logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.Containertitle}>
        <Text style={styles.title}>Signup</Text>
      </View>
      <View style={styles.containernote}>
        <Text style={styles.note}>Create your account</Text>
      </View>
      <View style={styles.containerINPUTEmail}>
        <InputFiled placeholder={'username'}></InputFiled>
      </View>
      <View style={styles.containerINPUTEmail}>
      <InputFiled placeholder={'Email'}></InputFiled>
      </View>
      <View style={styles.containerINPUTEmail}>
      <InputFiled placeholder={'password'}  secureTextEntry={true}></InputFiled>
      </View>
      <View style={styles.containerButton}>
      <TouchableOpacity style={styles.backgroundButton} onPress={handleSignup}>
  <Text style={styles.SignUp}>SignUp</Text>
</TouchableOpacity>
      </View>
      <View style={styles.containernote}>
        <Text style={styles.note}>Already have an Account? </Text>
        <TouchableOpacity>
          <Text
            style={styles.Login}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },

  backicon: {
    marginTop: 20,
    marginLeft: 10,
  },
  containerlogo: {
    alignSelf: "center",
    marginTop: 70,
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 100,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  Containertitle: {
    justifyContent: "center",
    alignItems: "center",
  },
  note: {
    color: "gray",
    fontSize: 10,
  },
  containernote: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  containerINPUTEmail: {
  
  },
  Input: {
    height: 40,
  },
  backgroundButton: {
    backgroundColor: "#FFB606",
    alignItems: "center",
    padding: 10,
    borderWidth: 0.3,
    borderColor: "#FFB606",
    marginVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  containerButton: {
    marginTop: 7,
    marginLeft: 10,
    marginRight: 10,
  },
  SignUp: {
    color: "#fff",
    fontWeight: "bold",
  },
  Login: {
    textDecorationLine: "underline",
    color: "blue",
    fontSize: 10,
  },
});

export default Signup;
