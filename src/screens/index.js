import React, { Component } from 'react';
import { AppLoading } from 'expo';
import nativeBaseHandler from '../common/nativeBaseHander';
import TabScreen from './tab/home';

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
    if (renderMain) {
      return <AppLoading />;
    }
    return (
      <TabScreen {...this.props} />
    );
  }
}
export default index;
