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
import InputFiled from "../components/InputFiled";
import { useNavigation } from "@react-navigation/native";
const Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.Maincontainer}>
      <View style={styles.containerlogo}>
        <Image
          source={require("../assets/images/Logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.Containertitle}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.containerINPUTEmail}>
        <InputFiled placeholder={"Email"}></InputFiled>
      </View>
      <View style={styles.containerINPUTEmail}>
        <InputFiled
          placeholder={"password"}
          secureTextEntry={true}
        ></InputFiled>
      </View>
      <TouchableOpacity style={styles.containernote}>
        <Text style={styles.note}>Forget password ?</Text>
      </TouchableOpacity>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.backgroundButton}
        >
          <Text style={styles.SignUp}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containernote}>
        <Text style={styles.note}>to Create Account </Text>
        <TouchableOpacity>
          <Text
            style={styles.Login}
            onPress={() => navigation.navigate("Signup")}
          >
            SignUp
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
  containerlogo: {
    alignSelf: "center",
    marginTop: 70,
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
    marginTop: 10,
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
    marginTop: 10,
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
