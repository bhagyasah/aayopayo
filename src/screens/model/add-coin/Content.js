import React, { Component } from 'react';
import  { Video } from 'expo';
import { StyleSheet, View } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../config';
import AddFinish from './addFinish';

class Content extends Component {
  state = {
    // isBuffering: false,
    // isPlaying: false,
    // isLoading: false,
    // isLoaded: false,
    didJustFinish: false,
    // videoHeight: 0,
    // videoWidth: 0,
  };

  onPlaybackStatusUpdate = (status) => {
    const { addCoinSuccess } = this.props;
    if (status.didJustFinish) {
      this.setState({
        didJustFinish: true,
      });
      addCoinSuccess();
    }

    this.setState({
      didJustFinish: status.didJustFinish,
      // isPlaying: status.isPlaying,
      // isBuffering: status.isBuffering,
    });
  }

  // onLoadVideo = (response) => {
  //   // console.log('vedio load response', response);
  // }

  // onReadyForDisplay = (response) => {
  //   // console.log('ready to display');
  // }

  render() {
    const { modal } = this.props;
    const { didJustFinish } = this.state;
    return (
      didJustFinish
        ? (<AddFinish {...this.props} />)
        : (
          <View>
            <Video
              style={styles.videoStyle}
              source={{ uri: modal.addCoinVideoUrl }}
              shouldPlay
              resizeMode="contain"
              onPlaybackStatusUpdate={this.onPlaybackStatusUpdate}
              onLoad={this.onLoadVideo}
              onReadyForDisplay={this.onReadyForDisplay}
            />
          </View>)
    );
  }
}
const styles = StyleSheet.create({
  videoStyle: {
    height: SCREEN_HEIGHT * 0.4,
    width: SCREEN_WIDTH * 0.9,
  },
});
export default Content;
