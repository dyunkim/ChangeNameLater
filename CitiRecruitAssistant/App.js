import React from 'react';
import { StyleSheet, SectionList, Text, View, TextInput, Button, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import CameraCapture from './camera_capture';

const NavigatorStack = createStackNavigator({
  Home: {screen: Home},
  Camera: {screen: CameraCapture}
})
const Navigator = createAppContainer(NavigatorStack);
export default Navigator;
