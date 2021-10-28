import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default DetailsScreen;
