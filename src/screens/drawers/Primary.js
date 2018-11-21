import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import {
  Container, Content,
} from 'native-base';
import { DrawerHeader, DrawerContent, DrawerFooter } from '../../components/drawer_menu';
import { header, contents, footer } from './PrimaryStructure';

class MenuContent extends Component {
  state ={};

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <DrawerHeader header={header} {...this.props} />
          <Content>
            <DrawerContent contents={contents()} {...this.props} />
            {/* <DrawerItems {...this.props} /> */}
            <DrawerFooter footer={footer} />
          </Content>
        </Container>
      </SafeAreaView>
    );
  }
}

export default MenuContent;
