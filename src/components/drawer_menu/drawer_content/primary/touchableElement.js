import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'native-base';

const touchableElement = (content, id, navigation) => {
  const navigationState = content.label.replace(/\s/g, '');
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(navigationState)}
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
