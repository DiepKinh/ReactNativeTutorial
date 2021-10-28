import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './MainTabScreen';

import {DrawerContent} from './DrawerContent';
import SupportScreen from './SupportScreen';
import BookmarkScreen from './BookmarkScreen';
import SettingScreen from './SettingScreen';
const Drawer = createDrawerNavigator();

const CustomDrawerNavigator5 = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeScreen" component={MainTabScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
        <Drawer.Screen name="SettingScreen" component={SettingScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
      </Drawer.Navigator>
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

export default CustomDrawerNavigator5;
