import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}
class HistoryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HistoryScreen</Text>
      </View>
    );
  }
}
class CartScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Cart Screen</Text>
      </View>
    );
  }
}
const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'home'} />
          </View>
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'person'} />
          </View>
        ),

        activeColor: '#ffffff',
        inactiveColor: '#a3c2fa',
        barStyle: {backgroundColor: '#2163f6'},
      },
    },
    History: {
      screen: HistoryScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'images'} />
          </View>
        ),

        activeColor: '#ffffff',
        inactiveColor: '#92c5c2',
        barStyle: {backgroundColor: '#2c6d6a'},
      },
    },
    Cart: {
      screen: CartScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'cart'} />
          </View>
        ),

        activeColor: '#ffffff',
        inactiveColor: '#ebaadb',
        barStyle: {backgroundColor: '#d13560'},
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#ffffff',
    inactiveColor: '#bda1f7',
    barStyle: {backgroundColor: '#6948f4'},
  },
);
export default createAppContainer(TabNavigator);
// export default class MaterialBottom extends Component {
//   render() {
//     return (
//       <View>
//         <Text> textInComponent </Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
