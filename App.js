import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'



export default function App() {
return(
  <View>
    <AppContainer/>

  </View>


)

}

const Stacker = createStackNavigator({
  Home : {screen : HomeScreen},
  Detail : {screen : DetailScreen}
},
{initialRouteName : 'Home'})

const AppContainer = createAppContainer(Stacker)
