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

const App = () => {
  return (
    <View style={styles.container}>
      <StackNavigator5 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
