import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import LiveCard from './live/LiveCard';

class Live extends Component {
  state = {};

  render() {
    const { main } = this.props;
    console.log('state in mainreducer', main);
    return (
      <View style={{ padding: 10 }}>
        {main.liveProduct.map((product, idx) => <LiveCard key={idx} product={product} {...this.props} />)}
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
