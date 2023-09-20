import { View, Text } from "react-native";
import React, { useContext, createContext, useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Setting from "../screens/Setting";
import Result from "../screens/Result";
import YourCourse from "../screens/YourCourse";
import ProductDetail from "../screens/ProductDetail";
import Payment from "../screens/Payment";
import Choose_Lessons_Course from "../screens/Choose_Lessons_Course";
import Programming from "../screens/Programming";
import Photoshop from "../screens/Photoshop";
import Design from "../screens/Design";
import CartCourse from "../screens/CardCourse";
import Ordercomfirmation from "../screens/Ordercomfirmation";
const Stack = createStackNavigator();
import axios from "axios";
const CourseContext = createContext();
export const useCourseContext = () => {
  return useContext(CourseContext);
};

const Appstack = () => {
  const [Allcourse, setAllcourse] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.1.110:3010/api/getCourse")
      .then((response) => {
        setAllcourse(response.data.courses);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  console.log("all course in app stack: " + Allcourse);
  return (
    <CourseContext.Provider value={{ Allcourse, setAllcourse }}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="Your Course" component={YourCourse} />
        <Stack.Screen name="Details" component={ProductDetail} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen
          name="Choose Lessons Course"
          component={Choose_Lessons_Course}
        />
        <Stack.Screen name="programming courses" component={Programming} />
        <Stack.Screen name="Design courses" component={Design} />
        <Stack.Screen name="PhotoShop courses" component={Photoshop} />
        <Stack.Screen name="Cart course" component={CartCourse} />
        <Stack.Screen name="Payment Method" component={Ordercomfirmation} />

        {/* Add more app screens here */}
      </Stack.Navigator>
    </CourseContext.Provider>
  );
};

export default Appstack;
