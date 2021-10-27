import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Press to go to detail screen"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};
const DetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Press to go to detail screen...again"
        onPress={() => navigation.push('Details')}
      />
      <Button
        title="Press to go to home screen"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Press to go back" onPress={() => navigation.goBack()} />
      <Button
        title="Press to go to first screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

const Stack = createStackNavigator();
export default class StackNavigator5 extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#009387'},
            headerTintColor: '#ffffff',
            headerTintStyle: {fontWeight: 'bold'},
          }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Overview',
              //   headerStyle: {backgroundColor: '#009387'},
              //   headerTintColor: '#ffffff',
              //   headerTintStyle: {fontWeight: 'bold'},
            }}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
