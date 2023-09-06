import React from 'react';
import { View, Text } from 'react-native';
import AntDesign from "@expo/vector-icons/AntDesign";

const LocationScreen = () => {
  return (
    <View style={{flex:1, backgroundColor:"white"}}>
        <View>
        <Text style={{fontSize:25, color:"black", margin:42}}>Location
        <AntDesign  name='caretdown' size={30} color="black" />

        </Text>
        </View>
    </View>
  );
};

export default LocationScreen;
