import React, { Component } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import { connect } from 'react-redux';
import { Drawer, Container, Content } from 'native-base';
import { DrawerHeader } from '../../components/drawer_menu';
import { header } from './SecondaryStructure';
import SecondaryContent from '../../components/drawer_menu/drawer_content/secondary';

const titleMessage = 'Our Vedic astrologers are professionals trained to treat astrology like a sacred science.In thier own lives in Nepal they are known to combine simple honest living with thinking';

class Secondary extends Component {

  state = {};

  render() {
    const { title, navigation } = this.props;
    return (
      <Container>
        <DrawerHeader header={header(title, titleMessage)} {...this.props} />
        <Content>
          <SecondaryContent content={title} navigationOptions={navigation} />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ drawer }) => drawer;

export default connect(mapStateToProps)(Secondary);
