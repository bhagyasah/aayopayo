import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ContactUs extends Component {

  state={};

  render() {
    return (
      <View style={styles.textSyle}>
        <Text> ContactUs Screen</Text>
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
export default ContactUs;
