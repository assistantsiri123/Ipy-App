import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import Foundation from "@expo/vector-icons/Foundation";

const SplashScreen = (props) => {
  useEffect(()=>{
    setTimeout(()=>{
      props.navigation.navigate("SignUpScreen");
    }, 3000);
  },[]);
  return (
    <View style={{flex: 1, backgroundColor:"white"}}>
        <View style={{height:"100%", width:"100%", backgroundColor:"red", justifyContent: 'center', alignItems: 'center'}}>
          <Foundation name='social-designer-news' size={149} color="white" />
          <View style={{marginTop:177, justifyContent:"center", alignItems:"center"}}>
          <Text style={{fontSize:39, color:"white", fontWeight:"bold"}}>Durar HR</Text>
        <Text style={{fontSize:18, color:"white", fontWeight:"bold"}}>The Complete HR Solutions</Text>
          </View>
        </View>
    </View>
  );
};

export default SplashScreen;
