import React, { Component } from 'react';
import { Video } from 'expo';
import { View, StyleSheet} from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../config';

class Content extends Component {
  state ={
    showVideo: false,
    playbackInstanceName: LOADING_STRING,
    loopingType: LOOPING_TYPE_ALL,
    muted: false,
    playbackInstancePosition: null,
    playbackInstanceDuration: null,
    shouldPlay: false,
    isPlaying: false,
    isBuffering: false,
    isLoading: true,
    fontLoaded: true,
    shouldCorrectPitch: true,
    volume: 1.0,
    rate: 1.0,
    videoWidth: SCREEN_WIDTH,
    videoHeight: SCREEN_HEIGHT,
    poster: false,
    useNativeControls: false,
    fullscreen: false,
    throughEarpiece: false,
  };

  render() {
    const { modal } = this.props;
    const { videoHeight, videoWidth, showVideo } = this.state;
    return (
      <View style={styles.videoContainer}>
        <Video
          ref={this._mountVideo}
          style={[
            styles.video,
            {
              opacity: showVideo ? 1.0 : 0.0,
              width: videoWidth,
              height: videoHeight,
            },
          ]}
          source={{ uri: modal.addCoinVideoUrl }}
          resizeMode={Video.RESIZE_MODE_CONTAIN}
          onPlaybackStatusUpdate={this._onPlaybackStatusUpdate}
          onLoadStart={this._onLoadStart}
          onLoad={this._onLoad}
          onError={this._onError}
          onFullscreenUpdate={this._onFullscreenUpdate}
          onReadyForDisplay={this._onReadyForDisplay}
          useNativeControls={this.state.useNativeControls}
        />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  videoContainer: {
    height: SCREEN_HEIGHT * 0.5,
  },
  video: {
    maxWidth: SCREEN_WIDTH,
  }
});
export default Content;
