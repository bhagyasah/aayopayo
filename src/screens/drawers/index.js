import React, { Component } from 'react';
import { AppLoading } from 'expo';
import Primary from './Primary';
import nativeBaseHandler from '../../common/nativeBaseHander';

class index extends Component {

  state={ renderMenu: true };

  async componentWillMount() {
    await nativeBaseHandler();
    this.setState({ renderMenu: false });
  }

  render() {
    const { renderMenu } = this.state;

    if (renderMenu) {
      return <AppLoading />;
    }
    // console.log('Nav options', navigation);
    return (
      <Primary {...this.props} />
    );
  }
}

export default index;
