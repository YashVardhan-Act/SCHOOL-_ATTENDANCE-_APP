import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import ResultScreen from './Screens/ResultScreen';
import db from './config';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={[styles.view]}>
        <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

var AppNavigator = createSwitchNavigator({
  screen1: HomeScreen,
  screen2: ResultScreen,
});

var AppContainer = createAppContainer(AppNavigator);
