import React from 'react';
import {
  Header, Left, Button, Icon, Body, Title, Right, Text, Badge,
} from 'native-base';
import { APP_COLOR, APP_TITLE_TEXT_COLOR } from '../../../../config';

export default ({ navigation, modal, updateModalValue }) => (
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
    <Right>
      <Button
        style={{ backgroundColor: APP_COLOR, marginRight: -15 }}
        transparent
        // onPress={() => Alert.alert('Show vedio add')}
      >
        <Icon name="logo-usd" style={{ color: 'yellow' }} />
        <Text style={{ color: 'yellow', maxWidth: 150 }}>{` Coins: ${12345}`}</Text>
        <Icon name="add" style={{ color: 'yellow', height: 20, width: 20 }} />
      </Button>
      <Button
        transparent
        onPress={() => updateModalValue('notificationModalshow', true)}
        style={{ marginRight: -10 }}
      >
        <Icon style={{ color: APP_TITLE_TEXT_COLOR, fontSize: 25 }} name="notifications" />
        <Badge
          style={{
            backgroundColor: 'red', height: 20, justifyContent: 'center', alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 10, color: 'white' }}>
            1
          </Text>
        </Badge>
      </Button>
    </Right>
  </Header>
);
