import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const ExploreScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ExploreScreen;
