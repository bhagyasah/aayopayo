import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainScreen from './src/screens';
import RooteRouter from './src/routers';

export default class App extends React.Component {

  state= {}

  render() {
    return (
      <RooteRouter />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
