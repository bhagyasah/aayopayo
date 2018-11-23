import React, { Component } from 'react';
import {Form, Input, Button, Item, Label, Text } from 'native-base';

class AcountDetails extends Component {

  state = {};

  render() {
    return (
      <Form>
        <Item stackedLabel>
          <Label>User Name</Label>
          <Input />
        </Item>
        <Item stackedLabel>
          <Label>PassWord</Label>
          <Input />
        </Item>
        <Button success full>
          <Text>Sign Up</Text>
        </Button>
      </Form>
    );
  }
}

export default AcountDetails;
