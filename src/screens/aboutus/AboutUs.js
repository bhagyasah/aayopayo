import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text } from 'native-base';
import renderScreenHeader from '../../common/ScreenHeader';


class AboutUs extends Component {

  static navigationOptions = {
    header: null,
  }

  state={};

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        {renderScreenHeader('About Us', navigation)}
        <Content>
          <Text>content goes here</Text>
        </Content>
      </Container>
    );
  }
}

AboutUs.defaultProps = {
  navigation: {},
}

AboutUs.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any)  //eslint-disable-line
};

export default AboutUs;
