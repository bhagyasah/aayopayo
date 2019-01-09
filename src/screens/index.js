import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import { Spinner } from 'native-base';
import nativeBaseHandler from '../common/nativeBaseHander';
import TabScreen from './tab/home';
import * as actions from '../actions';
import { getAsyncData } from '../common/AsycstrorageAaayopayo';

class index extends Component {

  static navigationOptions = {
    header: null,
  }

  state={ renderMain: true };

  async componentWillMount() {
    const { updateFormValue, fetchProduct } = this.props;
    await nativeBaseHandler();
    await fetchProduct();
    const loginStatus = await getAsyncData('LOGIN_STATUS');
    if (loginStatus === 'true') {
      updateFormValue('loginStatus', true);
    } else {
      updateFormValue('loginStatus', false);
    }
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

const mapStateToProps = ({ registerForm }) => registerForm;

export default connect(mapStateToProps, { ...actions })(index);
