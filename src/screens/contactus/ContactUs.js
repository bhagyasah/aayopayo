import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text } from 'native-base';
import renderScreenHeader from '../../common/ScreenHeader';


class ContactUs extends Component {

  static navigationOptions = {
    header: null,
  }

  state={};

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        {renderScreenHeader('Contact Us', navigation)}
        <Content>
          <Text>content goes here</Text>
        </Content>
      </Container>
    );
  }
}

ContactUs.defaultProps = {
  navigation: {},
}

ContactUs.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any)  //eslint-disable-line
};

export default ContactUs;
