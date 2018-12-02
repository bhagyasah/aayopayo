import React, { Component } from 'react';
import { Text, View } from 'native-base';
import { ScrollView, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { SCREEN_WIDTH, APP_COLOR } from '../../../config';

class CustomModal extends Component {
  state={ isVisible: true };

  showModalHandler = () => {
    this.setState({
      isVisible: false,
    });
  }

  render() {
    const { isVisible } = this.state;
    const { updateModalValue, modal} = this.props;
    return (
      <Modal
        isVisible={modal.notificationModalshow}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        onSwipe={() => updateModalValue('notificationModalshow', false)}
        swipeDirection="down"
        style={styles.centerModal}
      >
        <View style={styles.scrollableModal}>
          <Text style={{ backgroundColor: APP_COLOR, color: 'white' }}>this is header</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <Text style={{ fontSize: 30 }} onPress={() => updateModalValue('notificationModalshow', false)}>This notification screen</Text>
            <Text style={{ fontSize: 30 }} onPress={this.showModalHandler}>This notification screen</Text>
            <Text style={{ fontSize: 30 }} onPress={this.showModalHandler}>This notification screen</Text>
            <Text style={{ fontSize: 30 }} onPress={this.showModalHandler}>This notification screen</Text>
            <Text style={{ fontSize: 30 }} onPress={this.showModalHandler}>This notification screen</Text>
            <Text style={{ fontSize: 30 }} onPress={this.showModalHandler}>This notification screen</Text>
            <Text style={{ fontSize: 30 }} onPress={this.showModalHandler}>This notification screen</Text>
            <Text style={{ fontSize: 30 }} onPress={this.showModalHandler}>This notification screen</Text>
            <Text style={{ fontSize: 30 }} onPress={this.showModalHandler}>This notification screen</Text>
            <Text style={{ fontSize: 30 }} onPress={this.showModalHandler}>This notification screen</Text>
            <Text style={{ fontSize: 30 }} onPress={this.showModalHandler}>This notification screen</Text>
            <Text style={{ fontSize: 30 }} onPress={this.showModalHandler}>This notification screen</Text>
            <Text style={{ fontSize: 30 }} onPress={this.showModalHandler}>This notification screen</Text>
            <Text style={{ fontSize: 30 }} onPress={this.showModalHandler}>This notification screen</Text>
            <Text style={{ fontSize: 30 }} onPress={this.showModalHandler}>This notification screen</Text>
            <Text style={{ fontSize: 30 }} onPress={this.showModalHandler}>This notification screen</Text>
            <Text style={{ fontSize: 30 }} onPress={this.showModalHandler}>This notification screen</Text>
            <Text style={{ fontSize: 30 }} onPress={this.showModalHandler}>This notification screen</Text>
          </ScrollView>
        </View>
      </Modal>
    );
  }
}

export default CustomModal;

const styles = StyleSheet.create({
  centerModal: {
    justifyContent: 'center',
    margin: 0,
    alignItems: 'center',
  },
  scrollableModal: {
    height: 300,
    margin: 0,
    width: SCREEN_WIDTH * 0.9,
    backgroundColor: '#fff',
  },
});
