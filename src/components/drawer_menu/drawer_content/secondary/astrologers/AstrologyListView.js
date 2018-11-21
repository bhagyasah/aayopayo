import React from 'react';
import { Thumbnail, ListItem, Left, Body, Text } from 'native-base';

export default ({ astrologer }) => {
  // console.log('data list of astrologer lsit view', astrologer.url);
  return (
    <ListItem avatar key={astrologer.title}>
      <Left>
        <Thumbnail source={{ uri: astrologer.image }} />
      </Left>
      <Body>
        <Text>{`astrologer: ${astrologer.artist}`}</Text>
        <Text style={{ color: '#757575', fontSize: 15 }}>{`Experience: ${astrologer.title}`}</Text>
      </Body>
    </ListItem>
  );
};
