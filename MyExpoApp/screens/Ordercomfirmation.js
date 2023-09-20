import { View, Text ,StyleSheet} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import { Platform } from "react-native";
import { ScrollView } from "react-native";
import { Image } from "react-native";

const Ordercomfirmation = () => {
  const route = useRoute();
  const { checkoutData } = route.params;
  console.log("the checkout data", JSON.stringify(checkoutData));
  return (
    <SafeAreaView style={styles.Maincontainer}>
      <View style={styles.container_Method}>
        <ScrollView>
        <Image
            source={require("../assets/images/visa.png")}
            resizeMode="contain"
            style={styles.visa}
          ></Image>
            <Image
            source={require("../assets/images/visa.png")}
            resizeMode="contain"
            style={styles.visa}
          ></Image>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Ordercomfirmation;

const styles = StyleSheet.create({
    Maincontainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    marginTop: 0,
  },
  visa:{
   width:150
  }
})
