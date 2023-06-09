import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Next from './screens/next';
import Data from './screens/data'
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown: false}} name="Next" component={Next} />
        <Stack.Screen options={{headerShown: false}} name="Data" component={Data} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;