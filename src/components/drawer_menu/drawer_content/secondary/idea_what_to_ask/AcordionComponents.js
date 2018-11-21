import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { View, Text, Icon } from 'native-base';
import { APP_TITLE_TEXT_COLOR, APP_COLOR } from '../../../../../config';

export const dataArray = [
  {title: 'Love', content: [{ question: `Love content goes Expo is the easiest way to start building a new React Native application. It allows you to start a project without installing or configuring any tools to build native code - no Xcode or Android Studio installation required (see Caveats).Assuming that you have Node installed, you can use npm to install the Expo CLI command line utility`}, { question: 'Love content' }], iconLeft: 'heart' },
  {title: 'Self', content: 'Self contentj goes here', iconLeft: 'person' },
  {title: 'Everyday Life', content: 'eveyday life content goes here', iconLeft: 'calendar' },
  {title: 'Education', content: 'Education content goes here', iconLeft: 'book' },
  {title: 'Work', content: 'Work content goes here ', iconLeft: 'git-network' },
  {title: 'Money', content: 'Money content goes here ', iconLeft: 'logo-usd' },
  {title: 'Bussiness', content: 'Bussiness content goes here', iconLeft: 'logo-bitcoin' },
];

export const renderHeaderHelper = (data, expended) => {
  return (
    <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row' }}>
        <Icon
          name={data.iconLeft}
          style={{
            marginRight: 10,
            marginLeft: 5,
            fontSize: 20,
            color: '#82B1FF',
          }}
        />
        <Text style={{ color: expended ? '#82B1FF' : '#000' }}>{data.title}</Text>
      </View>
      <View>
        {expended
          ? <Icon name="arrow-dropup" style={{ color: '#82B1FF' }} />
          : <Icon name="arrow-dropdown" style={{ color: '#82B1FF' }} />
      }
      </View>
    </View>
  );
};

const renderContentView = (content, onPresSendIcon, navigationOptions) => {
  return (
    <View
      key={content.question}
      style={styles.contentStyle}
    >
      <View style={styles.contentTextViewStyle}>
        <Text style={{ color: '#757575' }}>{content.question}</Text>
      </View>
      <View style={styles.contentIconStyle}>
        <TouchableOpacity
          onPress={() => {
            onPresSendIcon(content.question);
            navigationOptions.closeDrawer();
          }}
        >
          <Icon name="send" style={{ color: APP_TITLE_TEXT_COLOR }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const renderContentHelper = ({ content }, onPresSendIcon, navigationOptions) => {
  return (
    <View>
      {content.map(contentItem => renderContentView(contentItem, onPresSendIcon, navigationOptions))}
    </View>
  );
};

renderContentHelper.defaultProps = {
  content: [],
};

renderContentHelper.propTypes = {
  content: PropTypes.arrayOf(PropTypes.any),
};

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  contentTextViewStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    borderBottomWidth: 0.5,
    borderBottomColor: '#757575',
    marginLeft: 10,
    backgroundColor: APP_COLOR,
  },
  contentIconStyle: {
    flex: 1,
    maxWidth: 50,
    flexDirection: 'row',
    marginRight: 5,
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
  },
});
