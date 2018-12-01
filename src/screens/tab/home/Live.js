import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Live extends Component {

  state={};

  render() {
    return (
      <View style={styles.textSyle}>
        <Text> Live Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textSyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Live;
