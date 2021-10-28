import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import MaterialBottom4 from './src/views/MaterialBottom4';
import StackNavigator5 from './src/views/StackNavigator5';
import DrawerNavigator5 from './src/views/DrawerNavigator5';
import MaterialBottom5 from './src/views/MaterialBottom5';
import CustomDrawerNavigator5 from './src/views/CustomDrawerNavigator5';
import LoginSignup from './src/views/LoginSignup';

const App = () => {
  return (
    <View style={styles.container}>
      <LoginSignup />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
