import * as React from "react";
import {  Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './screens/Signup';
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import Setting from "./screens/Setting";
import Home from "./screens/Home";
import Result from "./screens/Result";
import YourCourse from "./screens/YourCourse";
import ProductDetail from "./screens/ProductDetail";
import Payment from "./screens/Payment";
import Choose_Lessons_Course from "./screens/Choose_Lessons_Course";
import SplashScreen from "./screens/SplashScreen";
import { Introudoction1 } from "./screens/Introudoction1";
import Introduction2 from "./screens/Introduction2";
import Introuduction3 from "./screens/Introuduction3";
const Stack = createStackNavigator();
export default function App() {
  return (
   <>
     <NavigationContainer>
    <Stack.Navigator  initialRouteName="Splash Screen">
    <Stack.Screen
          name="Splash Screen"
          component={SplashScreen}
        />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="introduction" component={Introudoction1} />
      <Stack.Screen name="introduction2" component={Introduction2} />
      <Stack.Screen name="introduction3" component={Introuduction3} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Result" component={Result} />
      <Stack.Screen name="Your Course" component={YourCourse} />
      <Stack.Screen name="Details" component={ProductDetail} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Choose Lessons Course" component={Choose_Lessons_Course} />
    
    </Stack.Navigator>
    </NavigationContainer>
   </>
  );
}

