import React from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import MainScreen from './src/screens';
import RootRouter from './src/routers';

export default class App extends React.Component {

  state= {}

  render() {
    return (
      <View style={{ marginTop: Platform.OS !== 'ios' ? StatusBar.currentHeight : 0, flex: 1 }}>
        <RootRouter />
      </View>
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
