import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { IconButton } from 'react-native-paper';


const SignUpScreen = () => {
  return (
    <View style={{flex:1, backgroundColor:"white"}}>
    <View style={{height:"50%", width:"100%", backgroundColor:"#FFEEA8", alignItems: 'center', justifyContent:"center"}}>
        <Text style={{fontSize:62, fontWeight:"bold", color:"red"}}>lpy.</Text>
    </View>
    <View style={{height:"50%", width:"100%", backgroundColor:"white", margin:20}}>
    <Button  mode="outlined" onPress={() => console.log('Pressed')} textColor='red' style={{height:60, width:"90%", paddingHorizontal:10, borderColor:"red", borderWidth:1, justifyContent:"center"}}>
        
    Sign In
  </Button>
  <Button  mode="outlined" onPress={() => console.log('Pressed')} textColor='red' style={{height:60, width:"90%", paddingHorizontal:10, marginTop:44, borderWidth:1, justifyContent:"center",borderColor:"#FC261B"}}>
    Create Account
  </Button>
  <View style={{flexDirection:"row", marginLeft:99, marginTop:40}}>
  <IconButton
    icon="facebook"
    iconColor="red"
    size={20}
    onPress={() => console.log('Pressed')}
  />
   <IconButton
    icon="google"
    iconColor="red"
    size={20}
    onPress={() => console.log('Pressed')}
  />
  <IconButton
    icon="apple"
    iconColor="red"
    size={20}
    onPress={() => console.log('Pressed')}
  />
  </View>
<Text style={{fontSize:12, textAlign:"center", marginTop:20}}>Log in in another Account?</Text>
    </View>
    </View>
  );
};

export default SignUpScreen;
