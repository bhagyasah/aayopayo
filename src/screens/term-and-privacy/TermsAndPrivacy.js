import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text } from 'native-base';
import renderScreenHeader from '../../common/ScreenHeader';


class TermsAndPrivacy extends Component {

  static navigationOptions = {
    header: null,
  }

  state={};

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        {renderScreenHeader('Terms And Privacy', navigation)}
        <Content>
          <Text>content goes here</Text>
        </Content>
      </Container>
    );
  }
}

TermsAndPrivacy.defaultProps = {
  navigation: {},
}

TermsAndPrivacy.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any)  //eslint-disable-line
};

export default TermsAndPrivacy;
