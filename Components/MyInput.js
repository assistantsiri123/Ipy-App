import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";

const MyInput = (props) => {
  return (
        <View style={{height:60, width:"100%", backgroundColor:"lightyellow", borderWidth:0.5, borderRadius:10, borderColor:"black", marginTop:10, flexDirection:"row", justifyContent: 'center'}}>
          {
            props.eye && <TouchableOpacity style={{marginRight:10, justifyContent:"center", alignItems:"center"}}>
            <Fontisto name='email' size={28} color="black"  />
            </TouchableOpacity>
          }
          {
            props.Shown && <TouchableOpacity style={{marginRight:10, justifyContent:"center", alignItems:"center"}}>
            <AntDesign name='lock' size={28} color="black"  />
            </TouchableOpacity>
          }
        <TextInput 
        keyboardType={props.keyboardType}
        style={{height:"100%",width:"80%", paddingHorizontal:10}}
        placeholder={props.placeholder}
        />
        </View>
  );
};

export default MyInput;
