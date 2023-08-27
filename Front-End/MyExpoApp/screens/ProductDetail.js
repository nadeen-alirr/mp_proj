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

const ProductDetail = () => {
  const navigation = useNavigation();
  const handle_back =()=>{
    navigation.navigate('Home')
  }
  return (
    <SafeAreaView style={styles.Maincontainer}>
      <View style={styles.container_header}>
        <TouchableOpacity style={styles.container_back} onPress={handle_back}>
          <Image source={require("../assets/images/backsign.png")}></Image>
        </TouchableOpacity>
        <Text style={styles.title}>javaScript</Text>
      </View>
      <View style={styles.containerImage}>
        <Image
          source={require("../assets/images/Illustration.png")}
          resizeMode="cover"
          style={styles.ImageCourse}
        ></Image>
      </View>
      <View style={styles.containerDetails}>
        <View style={styles.container_price}>
          <Text style={styles.price}>50$</Text>
        </View>
        <Text style={styles.Title}>About the course</Text>
        <Text style={styles.description}>
          You can launch a new career in web develop- ment today by learning
          HTML & CSS. You don't need a computer science degree or expensive
          software. All you need is a computer, a bit of time, a lot of
          determination, and a teacher you trust.
        </Text>
      </View>
      <View style={styles.containerDuration}>
        <Text style={styles.duration}>Duration</Text>
        <Text>1 h 30 min</Text>
      </View>
      <TouchableOpacity style={styles.containerbutn}>
        <View style={styles.background_color_btn}>
          <Text style={styles.text_btn}>Add to cart</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProductDetail;
const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    marginTop: 0,
  },
  container_header: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
  },
  container_back: {
    marginLeft: 14,
  },
  containerImage: {
    alignItems: "center",
    justifyContent: "center",
  },
  ImageCourse: {

  },
  containerDetails: {
    flexDirection: "column",
    gap: 7,
    padding: 12,
    marginTop:10
  },
  container_price: {
    backgroundColor: "#0B7077",
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 18,
    position: "absolute",
    right: 30,
  },
  price: {
    fontWeight: "bold",
    backgroundColor: "#0B7077",
    color: "#fff",
  },
  Title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  duration: {
    fontWeight: "bold",
    fontSize: 18,
  },
  containerDuration: {
    padding: 12,
    gap: 3,
  },
  containerbutn: {},
  background_color_btn: {
    backgroundColor: "#FFB606",
    margin: 15,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.3,
    borderRadius: 15,
  },
  text_btn: {
    color: "#fff",
    fontWeight:'bold'
  },
});
