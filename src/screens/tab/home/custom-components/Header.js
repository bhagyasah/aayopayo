import React from 'react';
import PropTypes from 'prop-types';
import {
  Header, Left, Button, Icon, Body, Title, Right, Text, Badge,
} from 'native-base';
import { APP_COLOR, APP_TITLE_TEXT_COLOR } from '../../../../config';

const unreadNotifications = (modal) =>  {
  return modal.content.reduce((total, next) => (!next.readStatus ? total + 1 : total), 0);
};

const CustomHeader = ({ navigation, updateModalValue, fetchNotifications, modal, addCoinHandler, registerForm }) => (
  <Header style={{ backgroundColor: APP_COLOR }}>
    <Left>
      <Button transparent onPress={() => navigation.openDrawer()}>
        <Icon style={{ color: APP_TITLE_TEXT_COLOR }} name="menu" />
      </Button>
    </Left>
    <Body>
      <Title style={{ color: APP_TITLE_TEXT_COLOR, marginLeft: -20 }}>
        AayoPaayo
      </Title>
    </Body>
    {registerForm.loginStatus && (
    <Right>
      <Button
        style={{ backgroundColor: APP_COLOR, marginRight: -15 }}
        transparent
        onPress={() => addCoinHandler()}
      >
        <Icon name="logo-usd" style={{ color: 'yellow' }} />
        <Text style={{ color: 'yellow', maxWidth: 150 }}>{` Coins: ${12345}`}</Text>
        <Icon name="add" style={{ color: 'yellow', height: 20, width: 20 }} />
      </Button>
      <Button
        transparent
        onPress={() => fetchNotifications()}
        style={{ marginRight: -10 }}
      >
        <Icon style={{ color: APP_TITLE_TEXT_COLOR, fontSize: 25 }} name="notifications" />
        { unreadNotifications(modal) !== 0
          ? (
            <Badge
              style={{
                backgroundColor: 'red', height: 20, justifyContent: 'center', alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 10, color: 'white' }}>
                {unreadNotifications(modal)}
              </Text>
            </Badge>
          )
          : null
        }
      </Button>
    </Right>
    )}
  </Header>
);

CustomHeader.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  updateModalValue: PropTypes.func.isRequired,
};

export default CustomHeader;
