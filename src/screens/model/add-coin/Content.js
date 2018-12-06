import React from 'react';
import { Video } from 'expo';
import { View } from 'react-native';

export default () => (
  <View style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}>
    <Video
      source={{ uri: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4' }}
      style={{ flex: 1 }}
      shouldPlay
      repeat
      resizeMode="cover"
      muted
      // volume={1.0}
      // rate={1.0}
      // ignoreSilentSwitch="obey"
    />
  </View>
);
