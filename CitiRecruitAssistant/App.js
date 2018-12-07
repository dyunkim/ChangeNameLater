import React from 'react';
import { StyleSheet, SectionList, Text, View, TextInput, Button, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import CameraCapture from './camera_capture';
import InfoPage from './info_page';

const NavigatorStack = createStackNavigator({
  Home: {screen: Home},
  Camera: {screen: CameraCapture},
  Profile: {screen: InfoPage}
})
const Navigator = createAppContainer(NavigatorStack);
export default Navigator;
