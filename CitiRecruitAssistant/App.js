import React from 'react';
import { AppRegistry, StyleSheet, SectionList, Text, View, TextInput, Button, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from './App';
import Home from './Home';
import CameraCapture from './camera_capture';
import InfoPage from './info_page';
import { name as appName } from "./app.json"; 
AppRegistry.registerComponent(appName, () => App) 

const NavigatorStack = createStackNavigator({
  Home: {screen: Home},
  Camera: {screen: CameraCapture},
  Profile: {screen: InfoPage}
})
const Navigator = createAppContainer(NavigatorStack);
export default Navigator;
