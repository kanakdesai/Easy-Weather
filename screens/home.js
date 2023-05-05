import {StyleSheet,Image, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {Keyboard} from 'react-native'
export default function Home({navigation, route}) {
  const[loc, setLoc] = useState('')
  
  console.log(loc)
  return (
    // <KeyboardAwareScrollView style={{flex: 1, height:'100%', width: '100%'}}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}> 
      <Image style={styles.ImageStyle} source={require('../Images/weather.png')}></Image>
      <Text style={styles.TextStyle}>Enter Location</Text>
      <TextInput onChangeText={(n)=>setLoc(n)} style={styles.input} placeholder='Ex: Mumbai'></TextInput>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Next",{loc})} >
        <Text style={styles.buttonStyle}>Check Weather</Text>
      </TouchableOpacity>
      <Text style={styles.bottomText}>Easy Weather</Text>
    </View>
    </TouchableWithoutFeedback>
      // </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#274472'
  },
  button: {
    width: 120,
    height: 40,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  input:{
    
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 5,
    height: '8%',
     width: '75%',
    borderRadius: 8,
    marginVertical: '2.5%',
    backgroundColor: 'white'
  },
  ImageStyle: {
    width: '40%',
    height: '40%',
    resizeMode: 'contain',
    marginTop: '10%'
  },
  TextStyle:{
    fontSize: 20,
    color: 'white',
    fontWeight: '700'
  },
  bottomText:{
    marginTop: '30%',
    color: 'white',
    fontStyle: 'italic',
    fontWeight: '600',
    fontSize: 10
  },
  buttonStyle:{
    fontWeight: '500',
    color: 'black'
  }
});
