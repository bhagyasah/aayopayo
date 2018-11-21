import React from 'react';
import { Separator, Text } from 'native-base';

export default (content) => {
  return (
    <Separator key={content.label}>
      <Text
        style={{ fontSize: 12 }}
      >
        {content.label}
      </Text>
    </Separator>
  );
};
