import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'native-base';

const touchableElement = (content, id, toggleMenu) => {
  // console.log('onpress func in touchable compenent', content, id, toggleMenu);
  return (
    <TouchableOpacity
      onPress={() => toggleMenu(content.label)}
      key={content.label}
      style={{
        padding: 15,
        borderBottomWidth: 0.5,
        borderBottomColor:
        '#c0c0c0',
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Icon name={content.iconLeft} style={{ marginRight: 10, fontSize: 20, color: '#82B1FF' }} />
          <Text>{content.label}</Text>
        </View>
        <Icon name={content.iconRight} style={{ fontSize: 20, color: '#82B1FF' }} />
      </View>
    </TouchableOpacity>
  );
};

export default touchableElement;
