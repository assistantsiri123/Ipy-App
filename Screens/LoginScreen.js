import React from 'react';
import { View, Text } from 'react-native';
import MyInput from '../Components/MyInput';
import MyAuthButton from '../Components/MyAuthButton';
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

const LoginScreen = (props) => {
  return (
    <View style={{flex:1, backgroundColor:"white"}}>
        <View style={{height:"30%", width:"100%", backgroundColor:"white", margin:44}}>
            <Text style={{fontSize:28, fontWeight:"bold", color:"black"}}>GODES</Text>

            <Text style={{fontSize:28, fontWeight:"bold", color:"black", marginTop:70}}>Welcome Back</Text>
            <Text style={{fontSize:12, fontWeight:"bold", color:"black"}}>Please Login to your account</Text>
        </View>
        <View style={{height:"70%", width:"100%", backgroundColor:"white", paddingHorizontal:10}}>
       <MyInput eye="True" placeholder="Email Address" />
       <MyInput Shown="True" placeholder="Password" keyboardType="phone-pad" />
       <MyAuthButton Messi="Login" onPress={()=>{
        props.navigation.navigate("LocationScreen");
       }} />

       <Text style={{textAlign:"center", margin:17}}>______________OR_______________</Text>
       <View style={{flexDirection:"row", justifyContent:"space-between",alignItems:"center",backgroundColor:"white"}}>
       <EvilIcons.Button name='sc-facebook' color="blue" size={30} onPress={()=>console.log("fb Pressed")} backgroundColor="white" />
       <AntDesign name='apple1' color="black" size={35} onPress={()=>console.log("apple Pressed")} backgroundColor="white" />
       <AntDesign name='google' color="green" size={35} onPress={()=>console.log("apple Pressed")} backgroundColor="white"/>
       </View>
       <View style={{margin:38, justifyContent:"center", alignItems:"center"}}>
       <Text >Dont't have an account?Register</Text>
       </View>
        </View>
    </View>
  );
};

export default LoginScreen;
