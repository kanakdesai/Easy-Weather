import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import axios from 'axios';

export default function Next({navigation, route}) {
  const {loc} = route.params;
  const none = 0;
  console.log('this is location ' + loc);
  const [errors, setErr] = useState('');
  const [text, setText] = useState('');
  const [fl, setFl] = useState('');

  const [temp, setTemp] = useState('');
  const loading = require('../Images/loading-bar.png');
  const sunny = require('../Images/sun.png');
  const cloudy = require('../Images/cloud.png');
  const rain = require('../Images/rainy.png');
  const [Img, setImg] = useState(loading);
  const getWeather = async () => {
    await axios({
      method: 'GET',
      url:
        'https://api.weatherapi.com/v1/current.json?key=280f06598515449d98b60759230405&q=' +
        loc,
    })
      .then(res => {
        console.log(res.data.current);
        setText(res.data.current.condition.text);
        setFl(res.data.current.feelslike_c);
        setTemp(res.data.current.temp_c);
        if (res.data.current.condition.text == 'Sunny') {
          setImg(sunny);
        } else if (res.data.current.condition.text == 'Partly cloudy') {
          setImg(cloudy);
        } else if (
          res.data.current.condition.text == 'Patchy rain possible' ||
          'Heavy rain'
        ) {
          setImg(rain);
        } else {
          setImg(sunny);
        }
      })
      .catch(err => {
        console.log(err);
        setErr(err);
      });
  };

  useEffect(() => {
    getWeather();
  }, []);

  return loc == '' || errors ? (
    <View style={styles.container}>
      <Text>Please add a valid location</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.TextStyle}>{loc.toUpperCase()}</Text>
        <Image source={Img} style={styles.ImageStyle}></Image>
        <Text style={styles.TextStyle}>{text}</Text>
        <Text style={styles.TextStyle}>Temperature: {temp}°C</Text>
        <Text style={styles.TextStyle}>Feels Like: {fl}°C</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#274472',
  },
  button: {
    width: 120,
    height: 40,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  ImageStyle: {
    width: '40%',
    height: '40%',
    resizeMode: 'contain',
  },
  card: {
    width: '75%',
    borderWidth: 0.5,
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#C3E0E5',
    
  },
  TextStyle: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    alignSelf: 'center',
  },
});
