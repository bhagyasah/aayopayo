import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { AppLoading } from 'expo';
import {
  Header, Left, Label, Button, Icon, Body, Right, Title, Container, Tabs, Tab
} from 'native-base';
import { APP_COLOR, APP_TITLE_TEXT_COLOR } from '../config';
import nativeBaseHandler from '../common/nativeBaseHander';
import Live from './tab/Live';
import Closed from './tab/Closed';
import Upcoming from './tab/Upcoming';

class index extends Component {

  static navigationOptions = {
    header: null,
  }

  state={ renderMain: true };

  async componentWillMount() {
    // const { fetchInitialAppData } = this.props;
    await nativeBaseHandler();
    // fetchInitialAppData();
    this.setState({ renderMain: false });
  }

  render() {
    const { renderMain } = this.state;
    const { navigation } = this.props;
    if (renderMain ) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Header style={{ backgroundColor: APP_COLOR }}>
          <Left>
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Icon style={{ color: APP_TITLE_TEXT_COLOR }} name="menu" />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: APP_TITLE_TEXT_COLOR }}>AayoPaayo</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.openDrawer}>
              <Icon style={{ color: APP_TITLE_TEXT_COLOR }} name="person" />
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
