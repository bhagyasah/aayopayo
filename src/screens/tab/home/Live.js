import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddCoin from '../../model/add-coin';

class Live extends Component {

  state={};

  render() {
    return (
      <View style={styles.textSyle}>
        <AddCoin />
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
