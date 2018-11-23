import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text, Form, Input, Item, Button, Label } from 'native-base';
import renderScreenHeader from '../../common/ScreenHeader';
import AcountDetails from './AcountDetails';

class RegisterNewAccount extends Component {

  static navigationOptions = {
    header: null,
  }

  state={};

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        {renderScreenHeader('Register New Account', navigation)}
        <Content>
          <AcountDetails />
        </Content>
      </Container>
    );
  }
}

RegisterNewAccount.defaultProps = {
  navigation: {},
}

RegisterNewAccount.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any)  //eslint-disable-line
};

export default RegisterNewAccount;
