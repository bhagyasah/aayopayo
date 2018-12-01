import React, { Component } from 'react';
import { Alert } from 'react-native';
import {
  Container, Header, Label, Left, Badge, Body, Button, Icon, Title, Right, Text, Tabs, Tab,
} from 'native-base';
import { APP_COLOR, APP_TITLE_TEXT_COLOR } from '../../../config';
import Live from './Live';
import Closed from './Closed';
import Upcoming from './Upcoming';

class index extends Component {

  state = {};

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header style={{ backgroundColor: APP_COLOR }}>
          <Left>
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Icon style={{ color: APP_TITLE_TEXT_COLOR }} name="menu" />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: APP_TITLE_TEXT_COLOR, marginLeft: -20 }}>AayoPaayo</Title>
          </Body>
          <Right>
            <Button style={{ backgroundColor: APP_COLOR, marginRight: -15 }} transparent onPress={() => Alert.alert('Show vedio add')}>
              <Icon name="logo-usd" style={{ color: 'yellow' }} />
              <Text style={{ color: 'yellow', maxWidth: 150 }}>{` Coins: ${12345}`}</Text>
              <Icon name="add" style={{ color: 'yellow', height: 20, width: 20 }} />
            </Button>
            <Button transparent onPress={this.openDrawer} style={{ marginRight: -10 }}>
              <Icon style={{ color: APP_TITLE_TEXT_COLOR, fontSize: 25 }} name="notifications" />
              <Badge style={{ backgroundColor: 'red', height: 20, justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontSize: 10, color: 'white' }}>1</Text></Badge>
            </Button>
          </Right>
        </Header>
        <Tabs tabBarBackgroundColor={APP_COLOR} tabBarPosition="bottom">
          <Tab heading="Live" tabStyle={{ backgroundColor: APP_COLOR }} activeTabStyle={{ backgroundColor: APP_COLOR }}>
            <Live />
          </Tab>
          <Tab heading="Upcoming" tabStyle={{ backgroundColor: APP_COLOR }} activeTabStyle={{ backgroundColor: APP_COLOR }}>
            <Upcoming />
          </Tab>
          <Tab heading="Closed" tabStyle={{ backgroundColor: APP_COLOR }} activeTabStyle={{ backgroundColor: APP_COLOR }}>
            <Closed />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
export default index;