import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

export default function Data({navigation,route}) {

    const {data} = route.params;
    const humidity = require('../Images/humidity.png');
    const dayNight = require('../Images/day-night.png');
    const rainfall = require('../Images/rainfall.png');
    const uv = require('../Images/uv.png');
    const windspeed = require('../Images/windspeed.png');
    const eye = require('../Images/eye.png');
  return (
    <View style={styles.container}>
      <View style={styles.card}>
            <View style={styles.innerCard}>
            <Image style={styles.ImageStyle} source={humidity}></Image>
            <Text style={styles.fontStyle}>Humidity</Text>
            <Text style={styles.fontStyle}>{data.humidity}</Text>
            </View>
            <View style={styles.innerCard}>
            <Image style={styles.ImageStyle} source={dayNight}></Image>
            <Text style={styles.fontStyle}>Day/Night?</Text>
            <Text style={styles.fontStyle}>{data.is_day==1?"Day":"Night"}</Text>
            </View>
            <View style={styles.innerCard}>
            <Image style={styles.ImageStyle} source={rainfall}></Image>
            <Text style={styles.fontStyle}>Preciptation</Text>
            <Text style={styles.fontStyle}>{data.precip_mm}mm</Text>
            </View>
            <View style={styles.innerCard}>
            <Image style={styles.ImageStyle} source={uv}></Image>
            <Text style={styles.fontStyle}>UV rays</Text>
            <Text style={styles.fontStyle}>{data.uv}</Text>
            </View>
            <View style={styles.innerCard}>
            <Image style={styles.ImageStyle} source={windspeed}></Image>
            <Text style={styles.fontStyle}>Wind speed</Text>
            <Text style={styles.fontStyle}>{data.wind_kph}kph</Text>
            </View>
            <View style={styles.innerCard}>
            <Image style={styles.ImageStyle} source={eye}></Image>
            <Text style={styles.fontStyle}>Visibility</Text>
            <Text style={styles.fontStyle}>{data.vis_km}km</Text>
            </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#274472',
      },
      card: {
        width: '90%',
        borderWidth: 0.5,
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'lightblue',
        
        
      },
      innerCard:{
        flexDirection: 'row',
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'lightblue',
        height: '15%',
        width: '90%',
        paddingHorizontal: '10%'
        
    
    },
    ImageStyle:{
        resizeMode: 'contain',
        width: 25,
        height: 25,
        // alignSelf: 'center',
        
    },
    fontStyle:{
      color: 'black',
      fontWeight: '600',
      fontSize: 20
    }
});