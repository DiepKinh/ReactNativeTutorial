import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import SlashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const RootStack = createStackNavigator();
const RootStackScreen = ({navigation}) => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="SlashScreen" component={SlashScreen} />
      <RootStack.Screen name="SignInScreen" component={SignInScreen} />
      <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;

const styles = StyleSheet.create({});
