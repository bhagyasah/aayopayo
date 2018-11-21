import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, List } from 'native-base';
import AstrologerListView from './AstrologyListView';
import ToucableElement from '../../primary/touchableElement';

class index extends Component {
  state = {};

  render() {
    const { data } = this.props;
    return (
      <List>
        {data.map(astrologer => <AstrologerListView key={astrologer.title} astrologer={astrologer} />)}
      </List>
    );
  }
}

const styles = StyleSheet.create({
  messageTextStyle: {
    marginBottom: 200,
    color: '#757575',
    padding: 10,
  },
});
export default index;
