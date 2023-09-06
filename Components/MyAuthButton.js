import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const MyAuthButton = (props) => {
    return(
        <TouchableOpacity
        onPress={props.onPress}
         style={{height:60, width:"100%",backgroundColor:"gray", borderRadius:10, borderColor:"Lightgray", borderWidth:0.5, marginTop:37, justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:22, fontWeight:"bold", color:"white"}}>{props.Messi}</Text>
        </TouchableOpacity>
    );
};
export default MyAuthButton;
