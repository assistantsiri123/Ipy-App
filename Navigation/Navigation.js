import React from "react";
import {NavigationContainer}  from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import LoginScreen from "../Screens/LoginScreen";
// import LocationScreen from "../Screens/LocationScreen";
import SplashScreen from "../Screens/SplashScreen";
import SignUpScreen from "../Screens/SignUpScreen";

const Stack=createStackNavigator();
const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">
                <Stack.Screen options={{headerShown: false}} name="SplashScreen" component={SplashScreen} />
                <Stack.Screen options={{headerShown: false}} name="SignUpScreen" component={SignUpScreen} />
                {/* <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={LoginScreen} />
                <Stack.Screen options={{headerShown: false}} name="LocationScreen" component={LocationScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Navigation;