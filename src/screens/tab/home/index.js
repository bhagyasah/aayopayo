import React, { Component } from 'react';
import {
  Container, Tabs, Tab,
} from 'native-base';
import { connect } from 'react-redux';
import { APP_COLOR } from '../../../config';
import Live from './Live';
import Closed from './Closed';
import Upcoming from './Upcoming';
import Header from './custom-components/Header';
import NotificationModal from '../../model/notification';
import * as actions from '../../../actions';

class index extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Header {...this.props} />
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
        <NotificationModal {...this.props} />
      </Container>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { ...actions })(index);
