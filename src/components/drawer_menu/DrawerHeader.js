import React, { Component } from 'react';
import { ImageBackground, Image } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Header, Left, Icon, Body, Title, Text, View,
} from 'native-base';
import {
  APP_COLOR, APP_TITLE_TEXT_COLOR, SCREEN_HEIGHT,SCREEN_WIDTH
} from '../../config';
// import * as actions from '../../actions';

class DrawerHeader extends Component {

  state = {};

  renderBackGroundImage = () => {
    const { header, contentMessage } = this.props;
    if (header.title === 'Menu') {
      return (
        <ImageBackground
          source={header.logo}
          style={{
            width: SCREEN_WIDTH * 0.9,
            height: SCREEN_HEIGHT * 0.2,
            backgroundColor: APP_COLOR,
          }}
        />
      );
    }
    return (
      <Text
        style={{
          padding: 10,
          color: '#757575',
          borderBottomWidth: 0.5,
          borderBottomColor: '#757575',
        }}
      >
        {header.contentMessage}
      </Text>);
  }

  render() {
    const { header, navigation } = this.props;
    return (
      <View>
        <Header style={{ backgroundColor: APP_COLOR, elevation: 2 }}>
          <Left>
            <Icon
              style={{ color: APP_TITLE_TEXT_COLOR }}
              name={header.title === 'Menu' ? 'close' : 'arrow-back'}
              onPress={() => {
                navigation.closeDrawer();
                // toggleMenu('Menu');
              }
              }
            />
          </Left>
          <Body>
            <Title>
              <Text
                style={{
                  color: APP_TITLE_TEXT_COLOR,
                  fontSize: 20,
                }}
              >
                {header.title}
              </Text>
            </Title>
          </Body>
        </Header>
        {this.renderBackGroundImage()}
      </View>
    );
  }
}

DrawerHeader.defaultProps = {
  header: {},
  navigation: {},
};

DrawerHeader.propTypes = {
  header: PropTypes.objectOf(PropTypes.any),
  navigation: PropTypes.objectOf(PropTypes.any),
};

// const mapStateToProps = ({ drawer }) => {
//   return drawer;
// };

export default DrawerHeader;
