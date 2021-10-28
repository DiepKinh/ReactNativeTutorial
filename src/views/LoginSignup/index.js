import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from '../CustomDrawerNavigator5/MainTabScreen';

import {DrawerContent} from '../CustomDrawerNavigator5/DrawerContent';
import SupportScreen from '../CustomDrawerNavigator5/SupportScreen';
import BookmarkScreen from '../CustomDrawerNavigator5/BookmarkScreen';
import SettingScreen from '../CustomDrawerNavigator5/SettingScreen';

import RootStackScreen from './RootStackScreen';

const Drawer = createDrawerNavigator();

const LoginSignup = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeScreen" component={MainTabScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
        <Drawer.Screen name="SettingScreen" component={SettingScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginSignup;
